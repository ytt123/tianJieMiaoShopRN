import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { MOBILE } from '../../../utils/regexp'
import { ajax, url } from '../../../api'
import useUser from '../../../utils/hooks/useUser'
import { setStorage, StorageKey } from '../../../utils/storage'
import useSpinner from '../../../utils/hooks/useSpinner'
import { Toast } from '@ant-design/react-native'
import { wechatAccountGet } from '../../../utils/extend/wechat'
import mainScreenConfig from '../../../config/mainScreen.config'
const useIndex = (
  mobile: string,
  password: string,
  setScreenType: any,
  setWechatAccountUuid: any,
) => {
  //@ts-ignore
  const { navigate, goBack, replace } = useNavigation()

  const { changeUserInfo, changeUserOnline } = useUser()
  const [tips, setTips] = useState(false)
  const { spinningChange } = useSpinner()

  const login = useCallback(() => {
    if (!MOBILE.test(mobile)) {
      Toast.show('请输入正确的手机号码')
      return
    }
    if (!password) {
      Toast.show('请输入正确的密码')
      return
    }

    spinningChange(true)
    ajax({
      url: url.login,
      data: {
        mobile,
        login_password: password,
        login_way: 'MOBILE',
      },
    })
      .then(res => {
        spinningChange(false)
        const { data, msg, token_info } = res
        Toast.show(msg)
        setStorage(StorageKey.TOKEN_INFO, token_info)
        changeUserInfo(data)
        changeUserOnline(true)
        goBack()
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [changeUserInfo, changeUserOnline, goBack, mobile, password, spinningChange])

  /**
   * 微信登录
   */
  const wechatLogin = useCallback(
    (wechat_account_uuid: string) => {
      ajax({
        url: url.wechatLogin,
        data: {
          wechat_account_uuid,
        },
      })
        .then(res => {
          const { data, msg, token_info } = res
          Toast.show(msg)
          setStorage(StorageKey.TOKEN_INFO, token_info)
          changeUserInfo(data)
          changeUserOnline(true)
          goBack()
        })
        .catch(err => {})
    },
    [changeUserInfo, changeUserOnline, goBack],
  )

  const wechatLoginClick = useCallback(() => {
    wechatAccountGet(spinningChange)
      .then(data => {
        const { unionid, uuid: wechatAccountUuid } = data
        if (unionid) {
          ajax({
            url: url.isBindAccountQuery,
            data: {
              wechat_unionid: unionid,
            },
          })
            .then(res => {
              const { data = {} } = res
              const { is_bind_account } = data

              if (is_bind_account) {
                wechatLogin(wechatAccountUuid)
              } else {
                setWechatAccountUuid(wechatAccountUuid)
                setScreenType('bindMobile')
              }
            })
            .catch(err => {})
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [setScreenType, setWechatAccountUuid, spinningChange, wechatLogin])

  return { login, wechatLoginClick, tips, setTips }
}
export default useIndex
