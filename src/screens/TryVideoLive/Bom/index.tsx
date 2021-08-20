import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { Iconfont, Touchable } from '../../../components'
import { dateFormatter } from '../../../utils/util'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  showcb: any
  livecb: any
}
const Index: React.FC<IndexProps> = props => {
  const { showcb, livecb } = props
  const { top, bottom } = useSafeAreaInsets()
  const [timeValue, setTimeValue] = useState<any>('筛选日期')
  return (
    <View style={[style.wrapper, { height: bottom + 80 }]}>
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
