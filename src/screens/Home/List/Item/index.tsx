import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import mainScreenConfig from '../../../../config/mainScreen.config'
import style from './style'
import { Touchable } from '../../../../components'
interface IndexProps {
  data: any
}
const Index: React.FC<IndexProps> = props => {
  const { data } = props
  const { name, sell_price, sell_num, uuid } = data || {}

  const { navigate } = useNavigation()
  const detail = useCallback(() => {
    navigate(mainScreenConfig.GoodsDetail.name, { uuid })
  }, [navigate, uuid])
  return (
    <Touchable
      style={style.wrapper}
      onPress={() => {
        detail()
      }}
    >
      <Image source={require('./assets/icon.png')} style={style.icon} />
      <View style={style.bom}>
        <View style={style.titleWrap}>
          <Text numberOfLines={2} style={style.titletext}>
            {name}
          </Text>
        </View>
        <View style={style.priceWrap}>
          <Text style={style.priceText}>￥{sell_price}</Text>
          <Text style={style.numText}>销量:{sell_num}</Text>
        </View>
      </View>
    </Touchable>
  )
}

export default Index
