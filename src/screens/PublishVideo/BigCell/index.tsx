import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { dateFormatter } from '../../../utils/util'
import { Touchable, Iconfont } from '../../../components'
interface IndexProps {
  ismore: boolean
  isFormal?: boolean
}
const Index: React.FC<IndexProps> = props => {
  const { ismore, isFormal = false } = props
  const [timeValue, setTimeValue] = useState<any>('')
  return (
    <View style={style.wrapper}>
      <Touchable style={style.left}>
        <Iconfont
          iconfont={isFormal ? '\ue656' : '\ue6d7'}
          style={isFormal ? style.icon1 : style.icon2}
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
          <Text style={style.tipDesText}>{'添加时间'}</Text>
          <Iconfont iconfont={'\ue6a3'} style={style.icon2} />
        </View>
      </Touchable>
    </View>
  )
}

export default Index
