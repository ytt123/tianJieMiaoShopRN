import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { placeholderColor } from '../../../config/style.config'
import { formStyle } from '../../../style/formStyle'
import { Iconfont, LinearButton } from '../../../components'
import useIndex from './useIndex'
import useInput from '../../../utils/hooks/useInput'
import useCodeSend from '../../../utils/hooks/useCodeSend'
import style from './style'
interface IndexProps {
  wechatAccountUuid: string
  setScreenType: any
}

const Index: React.FC<IndexProps> = props => {
  const { wechatAccountUuid, setScreenType } = props
  const mobile = useInput('')
  const code = useInput('')
  const { sendMsg, codeSend } = useCodeSend()
  const { bind, tips, setTips } = useIndex(mobile.value, code.value, wechatAccountUuid)

  return (
    <View style={formStyle.form}>
      <View style={[formStyle.formItem, { borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }]}>
        <View style={[style.inputLabel, { marginLeft: 7, marginRight: 14 }]}>
          <Iconfont iconfont={'\ue600'} />
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
        {/* <View style={formStyle.inputLabel}>
          <Text style={formStyle.inputLabelText}>验证码</Text>
        </View> */}
        <TextInput
          style={formStyle.input}
          placeholder="请输入验证码"
          keyboardType="number-pad"
          {...code}
          placeholderTextColor={placeholderColor}
        />
        <TouchableOpacity
          style={formStyle.codeView}
          onPress={() => {
            codeSend(mobile.value)
          }}
        >
          <Text style={{ color: '#FF2442' }}>{sendMsg}</Text>
          {/* <LinearButton buttonStyle={formStyle.codeView} text={sendMsg} /> */}
        </TouchableOpacity>
      </View>
      {/* <View style={style.tip}>
        <TouchableOpacity
          hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
          onPress={() => {
            setTips(!tips);
          }}>
          <Iconfont
            iconfont={tips ? '\ue62e' : '\ue64a'}
            size={16}
            style={style.tipImg}
          />
        </TouchableOpacity>

        <Text style={style.tipText}>
          登录/注册即代表您已阅读并同意《壹品一美隐私政策》 《壹品一美用户协议》
        </Text>
      </View> */}

      <View style={{ marginTop: 5 }}>
        <TouchableOpacity style={style.button} onPress={() => {}}>
          <Text style={style.buttonText}>绑 定</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={formStyle.oper}>
        <TouchableOpacity onPress={() => setScreenType('login')}>
          <Text style={formStyle.operText}>返回登录</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default Index
