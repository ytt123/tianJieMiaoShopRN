import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { placeholderColor } from '../../../config/style.config'
import { formStyle } from '../../../style/formStyle'
import { Iconfont, LinearButton } from '../../../components'

import style from './style'
import useCodeSend from '../../../utils/hooks/useCodeSend'
import useInput from '../../../utils/hooks/useInput'
import useIndex from './useIndex'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../../config/mainScreen.config'
import { MOBILE } from '../../../utils/regexp'
import { Toast } from '@ant-design/react-native'
interface IndexProps {
  setScreenType: any
  setWechatAccountUuid: any
  setMobile: any
}
const Index: React.FC<IndexProps> = props => {
  const { setScreenType, setWechatAccountUuid, setMobile } = props
  const mobile = useInput('')
  const code = useInput('')

  const { loginByCode, tips, setTips, wechatLoginClick } = useIndex(
    mobile.value,
    code.value,
    setScreenType,
    setWechatAccountUuid,
  )
  const { sendMsg, codeSend } = useCodeSend()
  const { navigate } = useNavigation()
  const isWXAppInstalled = useSelector<any, boolean>(state =>
    state.getIn(['init', 'isWXAppInstalled']),
  )
  return (
    <View style={formStyle.form}>
      <View style={style.tip}>
        {/* <TouchableOpacity
          hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
          onPress={() => {
            setTips(!tips)
          }}
        >
          <Iconfont iconfont={tips ? '\ue62e' : '\ue64a'} size={16} style={style.tipImg} />
        </TouchableOpacity> */}
        <View style={{ flex: 1 }}>
          <Text style={[style.tipText]}>
            登录即表示您同意协议:
            <Text
              style={{ color: '#FF2442' }}
              onPress={() => {
                navigate(mainScreenConfig.MyHtml.name, {
                  title: '用户协议',
                  type_value: 'USER_AGREEMENT',
                })
              }}
            >
              《用户协议》
            </Text>
            <Text>和</Text>
            <Text
              style={{ color: '#FF2442' }}
              onPress={() => {
                navigate(mainScreenConfig.MyHtml.name, {
                  title: '隐私政策',
                  type_value: 'PRIVACY_POLICY',
                })
              }}
            >
              《隐私政策》
            </Text>
          </Text>
        </View>
      </View>

      <Text style={{ marginTop: 30, marginBottom: 14 }}>手机号码</Text>
      <View style={[formStyle.formItem, { alignItems: 'center' }]}>
        <View style={style.inputLabel}>
          <Text style={style.inputLabelText}>+86</Text>
        </View>
        <View
          style={{
            width: 1,
            height: 20,
            backgroundColor: '#D9D9D9',
            marginRight: 22,
          }}
        />
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
      {/* <View style={formStyle.formItem}>
        <View style={formStyle.inputLabel}>
          <Text style={formStyle.inputLabelText}>验证码</Text>
        </View>
        <TextInput
          style={formStyle.input}
          placeholder="请输入验证码"
          {...code}
          keyboardType="number-pad"
          placeholderTextColor={placeholderColor}
        />
        <TouchableOpacity style={formStyle.codeView} onPress={() => codeSend(mobile.value)}>
          <Text style={style.codeText}>{sendMsg}</Text>
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity
        style={[formStyle.button, style.button]}
        // onPress={() => codeSend(mobile.value)}>
        onPress={() => {
          if (!MOBILE.test(mobile.value)) {
            Toast.show('请输入正确的手机号码')
            return
          }
          setScreenType('InputCode')
          setMobile(mobile.value)
        }}
      >
        <Text style={style.codeText}>获取短信验证码</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={loginByCode} style={formStyle.button}>
        <Text style={style.buttonText}>登 录</Text>
      </TouchableOpacity> */}

      <View style={formStyle.oper}>
        {/* <View /> */}
        <TouchableOpacity onPress={() => setScreenType('login')}>
          <Text style={formStyle.operText}>密码登录</Text>
        </TouchableOpacity>
      </View>

      {isWXAppInstalled && (
        <View style={formStyle.thirdView}>
          <View style={formStyle.lineView}>
            <View style={formStyle.thirdLine} />
            <Text style={formStyle.thirdText}>第三方登录</Text>
            <View style={formStyle.thirdLine} />
          </View>
          <TouchableOpacity
            onPress={() => {
              wechatLoginClick()
            }}
          >
            <Image source={require('../../../assets/images/wxicon.png')} style={style.wx} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Index
