import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
interface IndexProps {
  data: any
}
const TabText: React.FC<IndexProps> = props => {
  const { data } = props
  const { order_num_info, physical_order_info } = data || {}
  const { today_order_num = 0 } = order_num_info || {}
  const { WAIT_DELIVER_GOODS = 0 } = physical_order_info || {}
  return (
    <View style={style.wrapper}>
      <View style={style.item}>
        <Text style={style.desText}>今日订单数</Text>
        <Text style={style.titleText}>{today_order_num}</Text>
      </View>
      <View style={style.item}>
        <Text style={style.desText}>今日待发货</Text>
        <Text style={style.titleText}>{WAIT_DELIVER_GOODS}</Text>
      </View>
    </View>
  )
}

export default TabText
