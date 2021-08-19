import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { placeholderColor } from '../../../config/style.config'
import { formStyle } from '../../../style/formStyle'
import style from './style'
import useInput from '../../../utils/hooks/useInput'
import useIndex from './useIndex'
import useCodeSend from '../../../utils/hooks/useCodeSend'
interface IndexProps {
  setScreenType: any
}
const Index: React.FC<IndexProps> = props => {
  const mobile = useInput('')
  const code = useInput('')
  const { sendMsg, codeSend } = useCodeSend()
  const { bind } = useIndex(mobile.value, code.value)
  return (
    <View style={formStyle.form}>
      <View style={formStyle.formItem}>
        <View style={formStyle.inputLabel}>
          <Text style={formStyle.inputLabelText}>+86</Text>
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
      <View style={formStyle.formItem}>
        <View style={formStyle.inputLabel}>
          <Text style={formStyle.inputLabelText}>验证码</Text>
        </View>
        <TextInput
          style={formStyle.input}
          placeholder="请输入验证码"
          keyboardType="number-pad"
          {...code}
          placeholderTextColor={placeholderColor}
        />
        <TouchableOpacity style={formStyle.codeView} onPress={() => codeSend(mobile.value)}>
          <Text style={style.codeText}>{sendMsg}</Text>
        </TouchableOpacity>
      </View>

      <View style={style.buttons}>
        <TouchableOpacity style={formStyle.button} onPress={bind}>
          <Text style={style.buttonText}>完成绑定</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Index
