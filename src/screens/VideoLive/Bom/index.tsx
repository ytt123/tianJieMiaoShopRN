import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { Iconfont, Touchable } from '../../../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  showcb: any
  livecb: any
}
const Index: React.FC<IndexProps> = props => {
  const { showcb, livecb } = props
  const { bottom } = useSafeAreaInsets()

  return (
    <View style={[style.wrapper, { height: bottom + 110 }]}>
      <Touchable style={[style.hitem, style.leftitem]} onPress={showcb}>
        <Iconfont iconfont={'\ue62c'} style={style.icon} />
        <Text style={style.leftText}>美颜</Text>
      </Touchable>

      <Touchable style={[style.hitem, style.centeritem]} onPress={livecb}>
        <View style={style.out} />
        <Text style={style.liveText}>开始直播</Text>
      </Touchable>
    </View>
  )
}

export default Index
