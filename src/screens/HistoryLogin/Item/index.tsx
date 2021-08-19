import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
interface IndexProps {
  data: any
}
const Index: React.FC<IndexProps> = props => {
  const { data } = props

  const { create_time = '' } = data || {}
  return (
    <View style={style.wrapper}>
      <Text style={style.titleText}>{create_time}</Text>
    </View>
  )
}

export default Index
