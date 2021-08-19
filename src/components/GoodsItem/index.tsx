import React from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'
import { imageMogr } from '../../utils/util'

interface IndexProps {
  data: any
  groupNum?: number
}

const Index: React.FC<IndexProps> = props => {
  const { data, groupNum } = props
  const { thum = '', name = '商品名称', spec_group_option = '', real_money = '0', num = '1' } =
    data || {}

  // console.log('123123123', JSON.stringify(data, null, 2))
  return (
    <View style={style.wrapper}>
      <Image
        source={thum ? { uri: `${thum}${imageMogr()}` } : require('./assets/icon.png')}
        style={style.icon}
      />

      <View style={style.canter}>
        <Text numberOfLines={2} style={style.titleText}>
          {name}
        </Text>
        <Text numberOfLines={2} style={style.desText}>
          {spec_group_option}
        </Text>
      </View>

      {groupNum ? (
        <View style={style.groupWarp}>
          <Text style={style.groupText}>{groupNum}人团</Text>
        </View>
      ) : (
        <View style={style.right}>
          {/* <Text style={style.priceText}>￥{real_money}</Text> */}
          <Text style={style.numText}>x{num}</Text>
        </View>
      )}
    </View>
  )
}

export default Index
