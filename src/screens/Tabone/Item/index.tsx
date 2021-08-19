import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { imageMogr } from '../../../utils/util'

import { Touchable } from '../../../components'

interface IndexProps {
  data: any
  index: number
  tabIndex: any
}
const Index: React.FC<IndexProps> = props => {
  const { data, index, tabIndex } = props
  const { goods_info, goods_num, spec_group_option } = data || {}
  const { name = '商品名称', sell_price = 0, thum, uuid } = goods_info || {}

  const imgurl =
    index === 0
      ? require('./assets/icon1.png')
      : index === 1
      ? require('./assets/icon2.png')
      : require('./assets/icon3.png')
  return (
    <Touchable activeOpacity={1} style={style.wrapper}>
      <Image source={imgurl} style={style.icon1} />

      <Image
        source={thum ? { uri: `${thum}${imageMogr(350)}` } : require('./assets/icon.png')}
        style={style.icon}
      />

      <View style={style.right}>
        <Text style={style.titleText} numberOfLines={2}>
          {name}
        </Text>

        {!!spec_group_option && (
          <Text style={style.desText} numberOfLines={1}>
            规格： {spec_group_option}
          </Text>
        )}

        <Text style={style.desText} numberOfLines={1}>
          {tabIndex == 2 ? '收藏' : '销量'}：{goods_num}
        </Text>
      </View>
    </Touchable>
  )
}

export default Index
