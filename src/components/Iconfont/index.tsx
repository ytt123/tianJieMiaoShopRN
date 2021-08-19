import React from 'react'
import { Text, StyleProp, TextStyle } from 'react-native'

interface IndexProps {
  iconfont: string
  color?: string
  size?: number
  style?: StyleProp<TextStyle>
  onPress?: () => void
}
const Index: React.FC<IndexProps> = props => {
  const { iconfont, color, size = 18, style = {}, onPress } = props
  return (
    <Text style={[{ fontFamily: 'iconfont', color, fontSize: size }, style]} onPress={onPress}>
      {iconfont}
    </Text>
  )
}

export default Index
