import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
interface IndexProps {
  data?: any
}
const Index: React.FC<IndexProps> = props => {
  const { data } = props
  const { order_no, intro, change_number = 0, update_time, symbol } = data || {}
  return (
    <View style={style.wrapper}>
      <View style={style.left}>
        <Text style={style.titleText}>
          {order_no} {intro}
        </Text>
        <Text style={style.timeText}>{update_time}</Text>
      </View>
      <Text style={symbol === '-' ? style.numText : style.num1Text}>
        {symbol}
        {change_number}
      </Text>
    </View>
  )
}

export default Index
