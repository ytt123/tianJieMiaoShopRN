import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../../api'
import useSpinner from '../../../utils/hooks/useSpinner'
const useIndex = (mobile: string, code: string) => {
  const navigation = useNavigation()
  const { spinningChange } = useSpinner()
  const changebind = useCallback(() => {
    spinningChange(true)
    ajax({
      url: url.mobileUpdate,
      data: {
        mobile,
        code,
      },
    })
      .then(res => {
        spinningChange(false)
        const { msg } = res
        Toast.show(msg)
        setTimeout(() => {
          navigation.goBack()
        }, 500)
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [spinningChange, mobile, code, navigation])

  return { changebind }
}
export default useIndex
