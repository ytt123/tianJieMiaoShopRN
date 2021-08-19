import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import style from './style'
interface IndexProps {
  data: any
}
const TabText: React.FC<IndexProps> = props => {
  const { data } = props
  const { order_num_info, order_info } = data || {}
  const { order_num = 0, return_order_num = 0 } = order_num_info || {}
  const { WAIT_DELIVER_GOODS = 0 } = order_info || {}
  return (
    <View style={style.wrapper}>
      <View style={style.item}>
        <Text style={style.titleText}>{order_num}</Text>
        <Text style={style.desText}>今日订单数</Text>
      </View>
      <View style={style.item}>
        <Text style={style.titleText}>{WAIT_DELIVER_GOODS}</Text>
        <Text style={style.desText}>今日待发货</Text>
      </View>
      <View style={style.item}>
        <Text style={style.titleText}>{return_order_num}</Text>
        <Text style={style.desText}>售后订单</Text>
      </View>
    </View>
  )
}

export default TabText
