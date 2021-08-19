import React, { useEffect, useState, useCallback, useRef } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { formStyle } from '../../../style/formStyle'
import style from './style'
import useCodeSend from '../../../utils/hooks/useCodeSend'
import useIndex from './useIndex'
import { Touchable } from '../../../components'

interface IndexProps {
  mobile: any
}
const Index: React.FC<IndexProps> = props => {
  const { mobile } = props
  const { sendMsg, codeSend } = useCodeSend()
  const [verifyCodeLength] = useState(6)
  const [verifyCode, setVerifyCode] = useState('')
  const { loginByCode } = useIndex(mobile, verifyCode)
  const inputRef = useRef<any>(null)
  useEffect(() => {
    // codeSend(mobile)
  }, [])

  const onTouchInput = useCallback(() => {
    const isFocused = inputRef.current.isFocused()
    if (!isFocused) {
      inputRef.current.focus()
    }
  }, [])
  const renderVerifyCode = value => {
    const paddedValue = value.padEnd(verifyCodeLength, ' ')
    const valueArray = paddedValue.split('')
    return (
      <Touchable activeOpacity={1} onPress={onTouchInput} style={style.verifyTextContainer}>
        {valueArray.map((digit, index) => {
          return (
            <View key={index} style={digit === ' ' ? style.textInputItem : style.textInputItemIn}>
              <Text style={style.verifyText}>{digit}</Text>
            </View>
          )
        })}
      </Touchable>
    )
  }
  return (
    <View style={formStyle.form}>
      <View style={style.tip}>
        <View style={{ flex: 1, marginTop: -25 }}>
          <Text style={[style.tipText]}>
            验证码已发送至手机:
            <Text style={{ color: '#FF2442' }}>+86 {mobile}</Text>
          </Text>
        </View>
      </View>

      <View style={style.formItem}>
        {renderVerifyCode(verifyCode)}
        <TextInput
          style={style.input}
          value={verifyCode}
          onChangeText={text => {
            const reg = /^[0-9]*$/
            if (reg.test(text)) {
              setVerifyCode(text)
            }
          }}
          keyboardType="number-pad"
          autoFocus
          maxLength={verifyCodeLength}
          underlineColorAndroid="transparent"
          caretHidden
          ref={inputRef}
        />
      </View>

      <View style={formStyle.oper}>
        <TouchableOpacity
          onPress={() => {
            codeSend(mobile)
          }}
        >
          <Text style={formStyle.operText}>{sendMsg}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[formStyle.button, style.button]}
        onPress={() => {
          loginByCode()
        }}
      >
        <Text style={style.codeText}>登 录</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index
