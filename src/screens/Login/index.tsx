import React, { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import style from './style'
import Login from './Login'

import LoginByCode from './LoginByCode'
import BindMobile from './BindMobile'
import userIndex from './userIndex'
import { textStyle } from '../../style/textStyle'
import LoginByCodeTwo from './LoginByCodeTwo'
interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const { screenType, setScreenType, wechatAccountUuid, setWechatAccountUuid } = userIndex()
  const [mobile, setMobile] = useState('')
  return (
    <SafeAreaView style={style.safe}>
      <ScrollView style={style.wrapper}>
        <View style={style.top}>
          <Text style={textStyle.heading}>
            {screenType === 'login' && '密码登录'}
            {screenType === 'loginByCode' && '验证码登录'}
            {screenType === 'bindMobile' && '绑定手机'}
            {screenType === 'InputCode' && '请输入验证码'}
          </Text>
        </View>
        {screenType === 'login' && (
          <Login setScreenType={setScreenType} setWechatAccountUuid={setWechatAccountUuid} />
        )}
        {screenType === 'loginByCode' && (
          <LoginByCode
            setMobile={setMobile}
            setScreenType={setScreenType}
            setWechatAccountUuid={setWechatAccountUuid}
          />
        )}
        {screenType === 'bindMobile' && (
          <BindMobile wechatAccountUuid={wechatAccountUuid} setScreenType={setScreenType} />
        )}
        {screenType === 'InputCode' && <LoginByCodeTwo mobile={mobile} />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
