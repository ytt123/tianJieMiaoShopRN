import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { placeholderColor } from '../../../config/style.config'
import { formStyle } from '../../../style/formStyle'
import style from './style'
import useInput from '../../../utils/hooks/useInput'
import useIndex from './useIndex'
import { Iconfont } from '../../../components'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../../config/mainScreen.config'

interface IndexProps {
  setScreenType: any
  setWechatAccountUuid: any
}
const Index: React.FC<IndexProps> = props => {
  const mobile = useInput('')
  const password = useInput('')

  const { navigate } = useNavigation()
  const { setScreenType, setWechatAccountUuid } = props
  const { login, tips, setTips, wechatLoginClick } = useIndex(
    mobile.value,
    password.value,
    setScreenType,
    setWechatAccountUuid,
  )

  const isWXAppInstalled = useSelector<any, boolean>(state =>
    state.getIn(['init', 'isWXAppInstalled']),
  )

  return (
    <View style={formStyle.form}>
      <View style={[formStyle.formItem, { borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }]}>
        <View style={[style.inputLabel, { marginLeft: 7, marginRight: 15 }]}>
          <Iconfont iconfont={'\ue70f'} />
        </View>
        <TextInput
          style={formStyle.input}
          placeholder="请输入手机号码"
          {...mobile}
          keyboardType="number-pad"
          autoFocus
          maxLength={11}
          placeholderTextColor={placeholderColor}
        />
      </View>
      <View style={[formStyle.formItem, { borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }]}>
        <View style={[style.inputLabel, { marginLeft: 7, marginRight: 15 }]}>
          <Iconfont iconfont={'\ue737'} />
        </View>
        <TextInput
          style={formStyle.input}
          secureTextEntry
          placeholder="请输入密码"
          {...password}
          blurOnSubmit
          onSubmitEditing={login}
          placeholderTextColor={placeholderColor}
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity style={style.button} onPress={login}>
          <Text style={style.buttonText}>登 录</Text>
        </TouchableOpacity>
      </View>
      <View style={formStyle.oper}>
        {/* <View style={style.rigth} /> */}
        <TouchableOpacity onPress={() => setScreenType('loginByCode')}>
          <Text style={formStyle.operText}>手机验证码登录</Text>
        </TouchableOpacity>
      </View>

      {isWXAppInstalled && (
        <View style={formStyle.thirdView}>
          <View style={formStyle.lineView}>
            <View style={formStyle.thirdLine} />
            <Text style={formStyle.thirdText}>第三方登录</Text>
            <View style={formStyle.thirdLine} />
          </View>
          <TouchableOpacity onPress={wechatLoginClick}>
            <Image source={require('../../../assets/images/wxicon.png')} style={style.wx} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Index
