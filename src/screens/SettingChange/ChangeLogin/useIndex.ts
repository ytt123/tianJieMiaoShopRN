import { useCallback, useEffect, useState } from 'react'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../../api'
import { useNavigation } from '@react-navigation/native'
const useIndex = (password: string, rePassword: string, changeLoginData: any) => {
  const navigation = useNavigation()

  const changpwClick = useCallback(() => {
    if (!password) {
      Toast.show('请输入密码')
      return
    }
    if (password !== rePassword) {
      Toast.show('两次输入密码不一致')
      return
    }
    ajax({
      url: url.loginPasswordUpdate,
      data: {
        ...changeLoginData,
        login_password: password,
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
  }, [password, rePassword, changeLoginData, navigation])

  useEffect(() => {
    ajax({
      url: url.accountsisSetLogin,
    })
      .then(res => {
        const { data } = res
        const { is_set_login_password = 0 } = data || {}
        is_set_login_password && navigation.setOptions({ title: '修改密码' })
      })
      .catch(err => {})
  }, [navigation])
  return {
    changpwClick,
  }
}
export default useIndex
