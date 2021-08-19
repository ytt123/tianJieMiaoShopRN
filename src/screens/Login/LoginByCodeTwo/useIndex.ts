import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../../api'
import useUser from '../../../utils/hooks/useUser'
import { setStorage, StorageKey } from '../../../utils/storage'
import useSpinner from '../../../utils/hooks/useSpinner'
const useIndex = (mobile: string, code: string) => {
  const navigation = useNavigation()
  //@ts-ignore
  const { replace, goBack } = navigation
  const { changeUserInfo, changeUserOnline } = useUser()
  const { spinningChange } = useSpinner()

  const loginByCode = useCallback(() => {
    if (code.length !== 6) {
      Toast.show('请输入验证码')
      return
    }
    spinningChange(true)
    ajax({
      url: url.login,
      data: {
        mobile: mobile,
        code,
        login_way: 'MOBILE_CODE',
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
        console.log(err)
        spinningChange(false)
      })
  }, [code, spinningChange, mobile, changeUserInfo, changeUserOnline, goBack])

  return { loginByCode }
}
export default useIndex
