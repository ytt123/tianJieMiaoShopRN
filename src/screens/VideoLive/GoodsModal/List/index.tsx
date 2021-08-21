import React from 'react'
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { Empty } from '../../../../components'
import style from './style'
import Item from './Item'
import useList from './useNoForceList'

import { url } from '../../../../api'
interface IndexProps {
  visible: boolean
  setVisible: any
  setInfo: any
  info: any
  map: any
}
const Index: React.FC<IndexProps> = props => {
  const { setVisible, setInfo, info, map } = props

  const { list, refresing, onRefresh, onEndReached, bottomLoading, empty } = useList(
    url.goodsGetBuyGoods,
    map,
  )

  return (
    <View style={style.wrapper}>
      <FlatList
        style={{ flex: 1 }}
        data={list}
        ListHeaderComponent={<>{empty && <Empty />}</>}
        ListFooterComponent={<ActivityIndicator animating={bottomLoading} />}
        keyExtractor={item => item.uuid}
        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh} />}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
        renderItem={({ item }) => {
          return <Item data={item} setInfo={setInfo} info={info} setVisible={setVisible} />
        }}
      />
    </View>
  )
}

export default Index
