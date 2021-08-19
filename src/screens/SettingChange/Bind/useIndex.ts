import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../../api'

const useIndex = (mobile: string, code: string) => {
  const navigation = useNavigation()

  const bind = useCallback(() => {
    ajax({
      url: url.mobileBind,
      data: {
        mobile,
        code,
      },
    })
      .then(res => {
        const { msg } = res
        Toast.show(msg)

        setTimeout(() => {
          navigation.goBack()
        }, 500)
      })
      .catch(err => {})
  }, [mobile, code, navigation])

  return { bind }
}
export default useIndex
