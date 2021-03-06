import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { Iconfont, Touchable } from '../../../../../components'
interface IndexProps {
  data: any
  setInfo: any
  info: any
  setVisible: any
}
const Index: React.FC<IndexProps> = props => {
  const { data, setInfo, info, setVisible } = props
  const { name = '', thum = '', sell_price = 0, uuid } = data || {}
  // const { order_goods_uuid } = info
  // const issele = order_goods_uuid === uuid

  const uuidArr = info.map((item: any, index: number) => item?.order_goods_uuid)
  const issele = uuidArr.indexOf(uuid) > -1
  return (
    <Touchable
      style={style.wrapper}
      onPress={() => {
        setInfo((pre: any[]) => {
          if (issele) {
            // 减
            const uuidIndex = uuidArr.indexOf(uuid)
            let copyArr = [...pre]
            copyArr.splice(uuidIndex, 1)
            return copyArr
          } else {
            //加
            return [...pre, { order_goods_uuid: uuid, goodsName: name, sell_price, thum }]
          }
          // ({ ...pre, order_goods_uuid: uuid, goodsName: name })
        })
        // setVisible(false)
      }}
      isflow={1}
    >
      <View>
        <Iconfont
          iconfont={issele ? '\ue656' : '\ue6d7'}
          style={issele ? style.seleItemIcon : style.itemIcon}
        />
      </View>
      <Image source={thum ? { uri: thum } : require('./assets/icon.png')} style={style.icon} />
      <View style={style.center}>
        <Text numberOfLines={2} style={style.titleText}>
          {name}
        </Text>
        {/* <Text style={style.desText}>{'浅蓝色；L'}</Text> */}
        <Text style={style.priceText}>
          <Text style={{ fontSize: 14 }}>￥</Text>
          {sell_price}
        </Text>
      </View>
      {/* <View style={style.rightWrap}>
        <Text style={style.priceText}>¥{sell_price}</Text>
        <Text style={style.desText1}>x 1</Text>
      </View> */}
    </Touchable>
  )
}

export default Index
