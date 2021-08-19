import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { DatePicker } from '@ant-design/react-native'
import { Iconfont, Touchable } from '../../../components'
import { dateFormatter } from '../../../utils/util'
interface IndexProps {
  typeValue: string
  selectType: any
  selectTime: any
}
const Index: React.FC<IndexProps> = props => {
  const { typeValue, selectType, selectTime } = props
  const [timeValue, setTimeValue] = useState<any>('筛选日期')
  return (
    <View style={style.wrapper}>
      <Touchable style={style.item} onPress={selectType}>
        <Text style={style.titleText}>{typeValue}</Text>
        <Iconfont iconfont={'\ue79b'} style={style.icon} />
      </Touchable>
      <View style={style.item}>
        <Iconfont iconfont={'\ue6de'} style={style.icon1} />
        <DatePicker
          mode="month"
          defaultDate={new Date()}
          minDate={new Date(2018, 11, 1)}
          maxDate={new Date(2026, 11, 1)}
          onChange={value => {
            const str = dateFormatter(value, 'yyyy-MM')
            setTimeValue(str)

            const year = +str.split('-')[0]
            const month = +str.split('-')[1]
            var lastDay = new Date(year, month, 0).getDate()
            selectTime((pre: any) => ({
              begin_time: `${str}-00 00:00:00`,
              end_time: `${str}-${lastDay} 23:59:59`,
            }))
          }}
          format="YYYY-MM-SS"
        >
          <Text style={style.titleText}>{timeValue}</Text>
        </DatePicker>
      </View>
    </View>
  )
}

export default Index
