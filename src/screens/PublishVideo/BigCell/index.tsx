import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { dateFormatter } from '../../../utils/util'
import { Touchable, Iconfont } from '../../../components'
import Top from './Top'
interface IndexProps {
  choosecb: any
  selecb: any
  isSele: boolean
}
const Index: React.FC<IndexProps> = props => {
  const { choosecb, selecb, isSele } = props

  return (
    <View style={style.wrapper}>
      <Touchable
        style={style.left}
        onPress={() => {
          selecb(!isSele)
        }}
      >
        <Iconfont
          iconfont={isSele ? '\ue656' : '\ue6d7'}
          style={isSele ? style.icon1 : style.icon2}
        />
        <View style={style.centerfont}>
          <Text style={style.titleText}>直播预报</Text>
          <Text style={style.desText}>为你的直播添加些悬念吧</Text>
        </View>
      </Touchable>
      {/* <Text style={style.tipDesText}>{'请选择'}</Text> */}
      {/* <Iconfont iconfont={'\ue6a3'} style={style.icon2} /> */}

      <Touchable onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* <Text style={style.tipDesText}>{'添加时间'}</Text> */}
          <Top choosecb={choosecb} />
          <Iconfont iconfont={'\ue6a3'} style={style.icon2} />
        </View>
      </Touchable>
    </View>
  )
}

export default Index
