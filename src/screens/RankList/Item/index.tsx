import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { imageMogr } from '../../../utils/util'
import { Touchable } from '../../../components'
interface IndexProps {
  data: any
  index: number
}
const Index: React.FC<IndexProps> = props => {
  const { data, index } = props
  const { goods_info, goods_num = 0, spec_group_option = '' } = data || {}
  const { name = '商品名称', thum } = goods_info || {}

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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {!!spec_group_option && (
            <Text style={[style.desText, { marginRight: 20 }]} numberOfLines={1}>
              {spec_group_option}
            </Text>
          )}
          <Text style={style.desText} numberOfLines={1}>
            销量:{goods_num}
          </Text>
        </View>
      </View>
    </Touchable>
  )
}

export default Index
