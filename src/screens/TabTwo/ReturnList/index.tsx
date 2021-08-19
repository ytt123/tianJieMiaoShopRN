import React, { useState } from 'react'
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import style from './style'
import useList from '../../../utils/hooks/useNoForceList'
import { Empty } from '../../../components'
import Item from './Item'
import { url } from '../../../api'
import { OrderFlowTypeValue } from '../../../constants/order.constants'
interface IndexProps {
  query: any
}
const Index: React.FC<IndexProps> = props => {
  const { query } = props
  const [map] = useState<any>({
    order_flow_type_value: OrderFlowTypeValue.ORDER_FLOW_PHYSICAL,
  })

  const [sort] = useState<any>('')
  const [full_fields] = useState<any>(['user_info', 'goods_info'])
  const { list, bottomLoading, refresing, onRefresh, onEndReached, listChangeByIndex } = useList(
    url.returnOrdersList,
    map,
    query,
    sort,
    full_fields,
  )

  return (
    <View style={style.wrapper}>
      <FlatList
        ListHeaderComponent={list.length === 0 ? <Empty /> : null}
        ListFooterComponent={<ActivityIndicator animating={bottomLoading} />}
        ListFooterComponentStyle={{ marginTop: 10, marginBottom: 10 }}
        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh} />}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
        data={list}
        keyExtractor={(item, index) => item?.uuid}
        renderItem={({ item, index }) => {
          const { uuid } = item
          return <Item key={uuid} data={item} index={index} listChangeByIndex={listChangeByIndex} />
        }}
      />
    </View>
  )
}

export default Index
