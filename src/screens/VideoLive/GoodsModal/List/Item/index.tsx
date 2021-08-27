import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { Iconfont, Touchable } from '../../../../../components'

import { Modal } from '@ant-design/react-native'

interface IndexProps {
  data: any
  setInfo?: any
  info: any
  setVisible: any
}
const Index: React.FC<IndexProps> = props => {
  const { data, setInfo, info, setVisible } = props
  const { name = '', thum = '', sell_price = 0, uuid } = data || {}

  const uuidArr = info.map((item: any, index: number) => item)
  const issele = uuidArr.indexOf(uuid) > -1

  console.log('aaaa', issele, JSON.stringify(info, null, 2), uuid)
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
            return [...pre, uuid]
          }
        })
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={style.priceText}>
            <Text style={{ fontSize: 14 }}>￥</Text>
            {sell_price}
          </Text>
          <Touchable
            onPress={() => {
              Modal.prompt(
                '',
                '',
                password => console.log(`password: ${password}`),
                'default',
                null,
                ['请输入排列序号'],
              )
            }}
          >
            <Text style={style.desText}>{'排序'}</Text>
          </Touchable>
        </View>
      </View>

      {/* <View style={style.rightWrap}>
        <Text style={style.priceText}>¥{sell_price}</Text>
        <Text style={style.desText1}>x 1</Text>
      </View> */}
    </Touchable>
  )
}

export default Index
