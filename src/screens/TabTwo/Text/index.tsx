import React from 'react'
import { View, Text } from 'react-native'
import { Iconfont } from '../../../components'

import style from './style'
interface IndexProps {
  text: string
  isSele: boolean
}
const TabText: React.FC<IndexProps> = props => {
  const { text, isSele } = props
  return (
    <View style={style.wrapper}>
      <Text style={isSele ? style.seletitle : style.title}>{text}</Text>
      {/* <View>
        <Iconfont iconfont={'\ue600'} />
        <Iconfont iconfont={'\ue600'} />
      </View> */}
    </View>
  )
}

export default TabText
