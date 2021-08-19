import { useState, useCallback } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useSpinner from '../../utils/hooks/useSpinner'
import { ajax, url } from '../../api'
import { wechatAccountGet } from '../../utils/extend/wechat'
import { Toast } from '@ant-design/react-native'
const useIndex = () => {
  const [isBind, setIsBind] = useState(false)
  const { spinningChange } = useSpinner()
  /**
   * 查询是否绑定微信
   */
  const isBindAccountQueryInLogin = useCallback(() => {
    ajax({
      url: url.isBindAccountQueryInLogin,
    })
      .then(res => {
        const { data = {} } = res
        const { is_bind_wechat_unionid } = data
        setIsBind(!!is_bind_wechat_unionid)
      })
      .catch(err => {})
  }, [])

  /**
   * 绑定微信
   */
  const wechatBind = useCallback(() => {
    wechatAccountGet(spinningChange)
      .then(data => {
        ajax({
          url: url.wechatBind,
          data: {
            wechat_account_uuid: data.uuid,
          },
        })
          .then(res => {
            Toast.show(res.msg)
            setIsBind(true)
          })
          .catch(err => {})
      })
      .catch(err => {})
  }, [spinningChange])

  /**
   * 解绑微信
   */
  const wechatUnbind = useCallback(() => {
    ajax({
      url: url.wechatUnbind,
    })
      .then(res => {
        Toast.show(res.msg)
        setIsBind(false)
      })
      .catch(err => {})
  }, [])
  /**
   * 微信点击
   */
  const wechatClick = useCallback(() => {
    if (isBind) {
      Alert.alert('确认解绑微信？', undefined, [
        { text: '解绑', onPress: wechatUnbind },
        { text: '取消', style: 'cancel' },
      ])
    } else {
      wechatBind()
    }
  }, [isBind, wechatBind, wechatUnbind])

  return {
    isBind,
    wechatClick,
    isBindAccountQueryInLogin,
  }
}

export default useIndex
