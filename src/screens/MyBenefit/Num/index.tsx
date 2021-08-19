import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'

interface IndexProps {
  data: any
}

const Index: React.FC<IndexProps> = props => {
  const { data } = props
  const {
    total_commission = 0,
    today_expect_commission = 0,
    today_real_commission = 0,
    total_expect_commission = 0,
  } = data || {}
  const total_commission_ = Math.floor(total_commission * 100) / 100
  const today_expect_commission_ = Math.floor(today_expect_commission * 100) / 100
  const today_real_commission_ = Math.floor(today_real_commission * 100) / 100
  const total_expect_commission_ = Math.floor(total_expect_commission * 100) / 100

  return (
    <View style={style.wrapper}>
      <View style={style.item1}>
        <Text style={style.title1Text}>累计收益</Text>
        <Text style={style.num1Text}>￥{total_commission_}</Text>
      </View>
      <View style={style.line}>
        <View style={style.item}>
          <Text style={style.titleText}>今日预计</Text>
          <Text style={style.numText}>￥{today_expect_commission_}</Text>
        </View>

        <View style={style.item}>
          <Text style={style.titleText}>今日到账</Text>
          <Text style={style.numText}>￥{today_real_commission_}</Text>
        </View>

        <View style={style.item}>
          <Text style={style.titleText}>累计预计</Text>
          <Text style={style.numText}>￥{total_expect_commission_}</Text>
        </View>
      </View>

      {/* <TouchableOpacity
        style={style.btn}
        onPress={() => {
          jump()
        }}
      >
        <Text style={style.btnText}>申请提现</Text>
      </TouchableOpacity>
      <View style={style.title}>
        <Text style={style.titleTText}>我的返现金</Text>
      </View> */}
    </View>
  )
}

export default Index
