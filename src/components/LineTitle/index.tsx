import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import style from './style'

interface IndexProps {
  title?: string
}
//医生
const Index: React.FC<IndexProps> = props => {
  const { title = '' } = props

  return (
    <ImageBackground style={style.wrapper} source={require('./assets/icon.png')}>
      <View style={style.point} />
      <Text style={style.titleText}>{title}</Text>
      <View style={style.point} />
    </ImageBackground>
  )
}

export default Index
