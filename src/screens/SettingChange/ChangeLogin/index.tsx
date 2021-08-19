import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { placeholderColor } from '../../../config/style.config'
import { formStyle } from '../../../style/formStyle'
import useInput from '../../../utils/hooks/useInput'
import style from './style'
import useIndex from './useIndex'
import { Touchable } from '../../../components'
interface IndexProps {
  setScreenType: any
  changeLoginData: any
}
const Index: React.FC<IndexProps> = props => {
  const { changeLoginData } = props

  const password = useInput('')
  const rePassword = useInput('')
  const { changpwClick } = useIndex(password.value, rePassword.value, changeLoginData)
  return (
    <View style={style.wrapper}>
      <View style={[formStyle.formItem]}>
        <View style={formStyle.inputLabel}>
          <Text style={formStyle.inputLabelText}>设置新密码</Text>
        </View>
        <TextInput
          style={formStyle.input}
          secureTextEntry
          placeholder="请输入新密码"
          {...password}
          placeholderTextColor={placeholderColor}
        />
      </View>
      <View style={formStyle.formItem}>
        <View style={formStyle.inputLabel}>
          <Text style={formStyle.inputLabelText}>确认新密码</Text>
        </View>
        <TextInput
          style={formStyle.input}
          secureTextEntry
          placeholder="请重新输入新密码"
          {...rePassword}
          placeholderTextColor={placeholderColor}
        />
      </View>
      <View style={style.buttons}>
        <Touchable style={formStyle.button} onPress={changpwClick}>
          <Text style={style.btnText}>确认</Text>
        </Touchable>
      </View>
    </View>
  )
}

export default Index
