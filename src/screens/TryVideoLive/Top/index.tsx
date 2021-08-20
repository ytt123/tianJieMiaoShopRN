import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { Iconfont } from '../../../components'
import { dateFormatter } from '../../../utils/util'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  selectTime?: any
}
const Index: React.FC<IndexProps> = props => {
  const { selectTime } = props
  const { top, bottom } = useSafeAreaInsets()
  const [timeValue, setTimeValue] = useState<any>('筛选日期')
  return (
    <View style={[style.wrapper, { height: top + 44 }]}>
      <Iconfont iconfont={'\ue624'} style={style.cancel} />
      <View style={style.addright}>
        <View style={style.pointText} />
        <Text>直播预览</Text>
      </View>
    </View>
  )
}

export default Index
