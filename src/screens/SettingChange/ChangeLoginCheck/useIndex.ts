import { useCallback } from 'react'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../../api'
const useIndex = (mobile: string, code: string, setScreenType: any, setChangeLoginData: any) => {
  const checkSafe = useCallback(() => {
    ajax({
      url: url.accountsCheckMobileCode,
      data: {
        mobile,
        code,
      },
    })
      .then(res => {
        setChangeLoginData({ mobile, code })
        const { msg } = res
        Toast.show(msg)
        setScreenType('changeLogin')
      })
      .catch(err => {})
  }, [mobile, code, setChangeLoginData, setScreenType])

  return { checkSafe }
}
export default useIndex
