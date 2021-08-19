import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import style from './style'
import { imageMogr } from '../../utils/util'

import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import useUser from '../../utils/hooks/useUser'
interface IndexProps {
  data: any
}
//项目
const Index: React.FC<IndexProps> = props => {
  const { data = {} } = props
  const { thum, name, intro, sell_price, name_tag, uuid } = data
  const { navigate } = useNavigation()
  const { userOnline, loginTip } = useUser()
  return (
    <TouchableOpacity
      style={style.wrapper}
      activeOpacity={1}
      onPress={() => {
        userOnline ? navigate(mainScreenConfig.ServiceDetail.name, { uuid }) : loginTip(navigate)
      }}
    >
      <Image
        source={thum ? { uri: `${thum}${imageMogr()}` } : require('../assets/cate1.png')}
        style={style.icon}
      />
      <View style={style.right}>
        <Text numberOfLines={2} style={style.titleText}>
          {name}
        </Text>
        <Text numberOfLines={2} style={style.desText}>
          {intro}
        </Text>
        <View style={{ flex: 1 }} />
        <View style={style.bom}>
          <Text style={style.priceText}>￥{sell_price}</Text>
          {!!name_tag && (
            <View style={style.tagWrap}>
              <Text style={style.tagText}>{name_tag}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Index
