import React from 'react'
import { Text, StyleProp, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { linearGradientColors } from '../../config/style.config'
import style from './style'

interface IndexProps {
  text: string
  width?: number | string
  height?: number
  buttonStyle?: StyleProp<ViewStyle>
  circle?: boolean
  colors?: any
}

const Index: React.FC<IndexProps> = props => {
  const {
    height,
    width,
    text,
    buttonStyle = { height: 48, borderRadius: 2 },
    circle = true,
    colors,
  } = props
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[style.button, { width, height, borderRadius: circle ? height : 0 }, buttonStyle]}
      colors={colors ? colors : linearGradientColors}
    >
      <Text style={style.buttonText}>{text}</Text>
    </LinearGradient>
  )
}

export default Index
