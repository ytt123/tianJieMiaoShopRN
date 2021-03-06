import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { Iconfont, Touchable } from '../../../components'
import { dateFormatter } from '../../../utils/util'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const { top } = useSafeAreaInsets()
  const { goBack } = useNavigation()
  return (
    <View style={[style.wrapper, { height: top + 44 }]}>
      <Touchable onPress={goBack}>
        <Iconfont iconfont={'\ue624'} style={style.cancel} />
      </Touchable>

      <View style={style.addright}>
        <View style={style.pointText} />
        <Text>直播预览</Text>
      </View>
    </View>
  )
}

export default Index
