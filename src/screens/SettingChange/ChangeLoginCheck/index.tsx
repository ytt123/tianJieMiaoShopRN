import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { placeholderColor } from '../../../config/style.config'
import { formStyle } from '../../../style/formStyle'
import style from './style'
import useInput from '../../../utils/hooks/useInput'
import useIndex from './useIndex'
import useCodeSend from '../../../utils/hooks/useCodeSend'
import { Touchable } from '../../../components'
interface IndexProps {
  setScreenType: any
  setChangeLoginData: any
}
const Index: React.FC<IndexProps> = props => {
  const { setScreenType, setChangeLoginData } = props
  const mobile = useInput('')
  const code = useInput('')
  const { checkSafe } = useIndex(mobile.value, code.value, setScreenType, setChangeLoginData)
  const { sendMsg, codeSend } = useCodeSend()
  return (
    <View style={style.form}>
      <View style={style.formItem}>
        <Text style={style.headText}>+86</Text>
        <TextInput
          style={style.input}
          placeholder="请输入手机号码"
          {...mobile}
          keyboardType="number-pad"
          autoFocus
          maxLength={11}
          placeholderTextColor={placeholderColor}
        />
      </View>
      <View style={formStyle.formItem}>
        <Text style={style.headText}>验证码</Text>
        <TextInput
          style={style.input}
          placeholder="请输入验证码"
          keyboardType="number-pad"
          {...code}
          placeholderTextColor={placeholderColor}
        />
        <Touchable style={formStyle.codeView} onPress={() => codeSend(mobile.value)}>
          <Text style={style.codeText}>{sendMsg}</Text>
        </Touchable>
      </View>

      <View style={style.buttons}>
        <Touchable style={formStyle.button} onPress={checkSafe}>
          <Text style={style.buttonText}>下一步</Text>
        </Touchable>
      </View>
    </View>
  )
}

export default Index
