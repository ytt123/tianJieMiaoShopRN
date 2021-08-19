import React from 'react'
import { View, TextInput } from 'react-native'
import { placeholderColor } from '../../../config/style.config'
import style from './style'
interface IndexProps {
  screenType: string
  shopInfo: any
  setValue: any
}
const Index: React.FC<IndexProps> = props => {
  const { screenType, setValue, shopInfo } = props
  const { address, name } = shopInfo || {}
  return (
    <View style={style.wrapper}>
      <TextInput
        style={[style.textArea]}
        placeholder={screenType === 'address' ? '请填写详细地址' : '请填写店铺名称'}
        placeholderTextColor={placeholderColor}
        multiline
        defaultValue={screenType === 'address' ? address : name}
        textAlignVertical="top"
        onChangeText={text => {
          setValue(text.trim())
        }}
      />
    </View>
  )
}

export default Index
