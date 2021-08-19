import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import style from './style'
interface IndexProps {
  data: any
}
const TabText: React.FC<IndexProps> = props => {
  const { data } = props
  const { uv_info, pay_info } = data || {}
  const { uv_num = 0, uv_num_past_1 = 0 } = uv_info || {}
  const { pay_money = 0, pay_money_past_1 = 0 } = pay_info || {}
  return (
    <ImageBackground style={style.wrapper} source={require('./assets/icon.png')}>
      <View style={style.allItem}>
        <View style={style.bothItem}>
          <View style={style.item}>
            <Text style={style.titleText}>昨日总访客</Text>
            <Text style={style.desText}>{uv_num_past_1}</Text>
          </View>
          <View style={style.item}>
            <Text style={style.titleText}>今日总访客</Text>
            <Text style={style.desText}>{uv_num}</Text>
          </View>
        </View>

        <View style={style.bothItem1}>
          <View style={style.item1}>
            <Text style={style.titleText}>昨日总成交额</Text>
            <Text style={style.desText}>
              <Text style={style.symble}>￥</Text>
              {pay_money_past_1}
            </Text>
          </View>
          <View style={style.item2}>
            <Text style={style.titleText}>今日总成交额</Text>
            <Text style={style.desText}>
              <Text style={style.symble}>￥</Text> {pay_money}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default TabText
