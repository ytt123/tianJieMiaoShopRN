import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { GoodsItem } from '../../../../components'
import { Touchable } from '../../../../components'
import useIndex from './useIndex'
interface IndexProps {
  data: any
  deleteByIndex: (index: number) => void
  index: number
  isAgent: boolean
}
const Index: React.FC<IndexProps> = props => {
  const { data, deleteByIndex, index, isAgent } = props
  const {
    goods_info = [],
    total_money,
    time_info,
    status_flag_name,
    type_value,
    status_flag,
    order_no,
    group_buy_team_info,
  } = data || {}
  const { create_order_time } = time_info || {}
  const dataChange = useCallback(() => {
    deleteByIndex(index)
  }, [deleteByIndex, index])
  const { noGoodsClick, sendClick } = useIndex(data)
  const isGroupSend = type_value === 'GROUP_BUY' && status_flag === 'WAIT_DELIVER_GOODS'
  const { status = 0, end_time, join_group_person_num = 0 } = group_buy_team_info || {}
  // 0尚未入团1拼团中2拼团失败3拼团成功',
  const isGroupSendstatus13 =
    type_value === 'GROUP_BUY' &&
    status_flag === 'WAIT_DELIVER_GOODS' &&
    (status === 1 || status === 3)
  return (
    <View style={style.wrapper}>
      <Touchable>
        <View style={style.topWrap}>
          <Text style={style.timeText}>{create_order_time}</Text>
          <View style={style.more}>
            <Text style={style.desText}>
              {isGroupSend && status === 1 ? '拼团中' : status_flag_name}
            </Text>
          </View>
        </View>
        <View style={style.centerWrap}>
          {goods_info &&
            goods_info.map((item: any, index: number) => {
              return (
                <GoodsItem
                  key={index}
                  data={item}
                  groupNum={isGroupSendstatus13 ? join_group_person_num : 0}
                />
              )
            })}
        </View>
      </Touchable>
      <View style={style.all}>
        <Touchable style={style.shopWrap}>
          <Text style={style.shopText}>{order_no}</Text>
        </Touchable>
        <View style={{ flex: 1 }} />
        <Text style={style.priceText}>共{goods_info.length}件商品 </Text>
        <Text style={style.priceText}> 合计: ¥{total_money}</Text>
      </View>
      <View style={style.btnsWrap}>
        {isAgent && (
          <Touchable
            onPress={() => {
              noGoodsClick(order_no, dataChange)
            }}
          >
            <Text style={style.btn2Text}>无货</Text>
          </Touchable>
        )}
        {/* <Touchable
          onPress={() => {
            sendClick(order_no, dataChange)
          }}
        >
          <Text style={style.btn2Text}>发货</Text>
        </Touchable> */}
      </View>
    </View>
  )
}

export default Index
