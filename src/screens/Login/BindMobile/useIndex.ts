import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ajax, url } from '../../../api'
import useUser from '../../../utils/hooks/useUser'
import { setStorage, StorageKey } from '../../../utils/storage'
import useSpinner from '../../../utils/hooks/useSpinner'
import { Toast } from '@ant-design/react-native'
import mainScreenConfig from '../../../config/mainScreen.config'
const useIndex = (mobile: string, code: string, wechat_account_uuid: string) => {
  //@ts-ignore
  const { goBack, replace } = useNavigation()
  const { changeUserInfo, changeUserOnline } = useUser()
  const [tips, setTips] = useState(false)
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
  const bind = useCallback(() => {
    if (!tips) {
      Toast.show('请先同意服务协议')
      return
    }
    spinningChange(true)

    ajax({
      url: url.mobileBindInLogout,
      data: {
        mobile,
        code,
        wechat_account_uuid,
        is_login: 1,
      },
    })
      .then(res => {
        spinningChange(false)
        const { data, msg, token_info } = res
        Toast.show(msg)
        setStorage(StorageKey.TOKEN_INFO, token_info)
        changeUserInfo(data)
        changeUserOnline(true)
        checkBaseInfo()
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [
    changeUserInfo,
    changeUserOnline,
    checkBaseInfo,
    code,
    mobile,
    spinningChange,
    tips,
    wechat_account_uuid,
  ])

  return { bind, tips, setTips }
}
export default useIndex
