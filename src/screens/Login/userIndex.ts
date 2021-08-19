import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const screenTypeMap = {
  login: '密码登录',
  loginByCode: '验证码登录',
  register: '账号注册',
  bindMobile: '绑定手机',
}

const useIndex = () => {
  const navigation = useNavigation()
  const [screenType, setScreenType] = useState<
    'login' | 'register' | 'loginByCode' | 'bindMobile' | 'InputCode'
  >('loginByCode')
  const [wechatAccountUuid, setWechatAccountUuid] = useState('')

  // useEffect(() => {
  //   navigation.setOptions({ title: screenTypeMap[screenType] })
  // }, [navigation, screenType])

  return {
    screenType,
    setScreenType,
    wechatAccountUuid,
    setWechatAccountUuid,
  }
}

export default useIndex
