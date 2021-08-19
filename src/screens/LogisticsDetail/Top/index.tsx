import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

import { imageMogr } from '../../../utils/util'
interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  return (
    <View style={style.wrapper}>
      <View>
        <Image
          source={
            0 ? { uri: `${1}${imageMogr(220)}` } : require('../../../assets/images/default.png')
          }
          style={style.img}
        />
      </View>
      <View style={style.rightWrap}>
        <Text style={style.title}>物流状态:运输中</Text>
        <Text style={style.text}>承运来源：顺丰快递</Text>
        <Text style={style.text}>运单编号：2081918918191819181918</Text>
      </View>
    </View>
  )
}

export default Index
