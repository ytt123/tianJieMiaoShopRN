import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { Iconfont, TouchableThrottle } from '../../../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  backcb: any
}
const Index: React.FC<IndexProps> = props => {
  const { backcb } = props
  const { top } = useSafeAreaInsets()
  return (
    <View style={[style.wrapper, { height: top + 44 }]}>
      <TouchableThrottle onPress={backcb}>
        <Iconfont iconfont={'\ue624'} style={style.cancel} />
      </TouchableThrottle>
      <View style={style.addright}>
        <View style={style.pointText} />
        <Text>直播预览</Text>
      </View>
    </View>
  )
}

export default Index
