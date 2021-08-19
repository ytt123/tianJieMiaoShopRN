import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { GoodsItem, ReturnOrderBtns, Touchable } from '../../../../components'

interface IndexProps {
  data: any
  listChangeByIndex: (index: number, data: any) => void
  index: number
}
const Index: React.FC<IndexProps> = props => {
  const { data, listChangeByIndex, index } = props
  const { goods_info = [], money, create_time, status_flag_name, return_order_no: order_no } =
    data || {}
  const dataChange = useCallback(
    data => {
      listChangeByIndex(index, data)
    },
    [index, listChangeByIndex],
  )
  return (
    <View style={style.wrapper}>
      <Touchable>
        <View style={style.topWrap}>
          <Text style={style.timeText}>{create_time}</Text>
          <View style={style.more}>
            <Text style={style.desText}>{status_flag_name}</Text>
          </View>
        </View>
        <View style={style.centerWrap}>
          {goods_info &&
            goods_info.map((item: any, index: number) => {
              return <GoodsItem key={index} data={item} />
            })}
        </View>
      </Touchable>
      <View style={style.all}>
        <Touchable style={style.shopWrap}>
          <Text style={style.shopText}>{order_no}</Text>
        </Touchable>
        <View style={{ flex: 1 }} />
        <Text style={style.priceText}>共{goods_info.length}件商品 </Text>
        <Text style={style.priceText}> 合计: ¥{money}</Text>
      </View>
      <ReturnOrderBtns data={data} dataChange={dataChange} />
    </View>
  )
}

export default Index
