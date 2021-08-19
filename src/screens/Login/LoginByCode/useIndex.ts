import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Toast } from '@ant-design/react-native'
import { MOBILE } from '../../../utils/regexp'
import { ajax, url } from '../../../api'
import useUser from '../../../utils/hooks/useUser'
import { setStorage, StorageKey } from '../../../utils/storage'
import { wechatAccountGet } from '../../../utils/extend/wechat'
import useSpinner from '../../../utils/hooks/useSpinner'
import mainScreenConfig from '../../../config/mainScreen.config'
const useIndex = (mobile: string, code: string, setScreenType: any, setWechatAccountUuid: any) => {
  const [tips, setTips] = useState(false)
  const navigation = useNavigation()
  //@ts-ignore
  const { replace, goBack } = navigation
  const { changeUserInfo, changeUserOnline } = useUser()
  const { spinningChange } = useSpinner()

  const checkBaseInfo = useCallback(() => {
    ajax({
      url: url.isSetBaseInfo,
      data: {},
    })
      .then(res => {
        if (!res?.data?.is_set_base_info) {
          setTimeout(() => {
            replace(mainScreenConfig.BaseInfo.name)
          }, 500)
        } else {
          goBack()
        }
      })
      .catch(err => {
        goBack()
      })
  }, [goBack, replace])
  const loginByCode = useCallback(() => {
    if (!MOBILE.test(mobile)) {
      Toast.show('请输入正确的手机号码')
      return
    }
    if (!code) {
      Toast.show('请输入验证码')
      return
    }
    !tips && Toast.show('请先同意服务协议')
    tips &&
      ajax({
        url: url.login,
        data: {
          mobile,
          code,
          login_way: 'MOBILE_CODE',
        },
      })
        .then(res => {
          const { data, msg, token_info } = res
          Toast.show(msg)
          setStorage(StorageKey.TOKEN_INFO, token_info)
          changeUserInfo(data)
          changeUserOnline(true)
          checkBaseInfo()
        })
        .catch(err => {})
  }, [mobile, code, tips, changeUserInfo, changeUserOnline, checkBaseInfo])

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
          checkBaseInfo()
        })
        .catch(err => {})
    },
    [changeUserInfo, changeUserOnline, checkBaseInfo],
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
      .catch(err => {})
  }, [setScreenType, setWechatAccountUuid, spinningChange, wechatLogin])

  return { loginByCode, wechatLoginClick, tips, setTips }
}
export default useIndex
