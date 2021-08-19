import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { dateFormatter } from '../../../utils/util'
interface IndexProps {
  setPre_begin_time: any
}
const Index: React.FC<IndexProps> = props => {
  const { setPre_begin_time } = props
  const [timeValue, setTimeValue] = useState<any>('')
  return (
    <View style={style.wrapper}>
      <View style={style.item}>
        <DatePicker
          mode="datetime"
          defaultDate={new Date()}
          minDate={new Date(2018, 11, 1)}
          maxDate={new Date(2026, 11, 1)}
          onChange={value => {
            const str = dateFormatter(value, 'MM-dd hh:mm')
            const str1 = dateFormatter(value, 'yyyy-MM-dd hh:mm:ss')
            setTimeValue(str)
            setPre_begin_time(str1)
          }}
          format="MM-SS HH:mm:ss"
        >
          <Text style={style.titleText}>预约直播时间:{timeValue}</Text>
        </DatePicker>
      </View>
    </View>
  )
}

export default Index
