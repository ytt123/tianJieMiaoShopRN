import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { dateFormatter } from '../../../../utils/util'
interface IndexProps {
  choosecb?: any
}
const Index: React.FC<IndexProps> = props => {
  const { choosecb } = props
  const [timeValue, setTimeValue] = useState<any>('添加时间')
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
            choosecb(str1)
          }}
          format="MM-SS HH:mm:ss"
        >
          <Text style={style.titleText}>{timeValue}</Text>
        </DatePicker>
      </View>
    </View>
  )
}

export default Index
