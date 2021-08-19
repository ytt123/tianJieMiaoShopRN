import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  return (
    <View style={style.wrapper}>
      <View style={style.left}>
        <View style={style.cycle} />
        <View style={style.line} />
      </View>
      <View style={style.right}>
        <Text style={style.text}>
          【长沙市】我是您的专属配送员李雷，您的订单已到达 长沙营业部，配送小哥会尽快为您配送
        </Text>
        <Text style={style.time}>2018-12-13 09：07：24</Text>
      </View>
    </View>
  )
}

export default Index
