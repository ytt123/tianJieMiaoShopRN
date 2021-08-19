import React, { useState } from 'react'

import style from './style'
import useIndex from './useIndex'
import { RefreshControl, View, FlatList } from 'react-native'
import Item from './Item'
import Banner from '../Banner'
import Shop from '../Shop'
import Video from '../Video'
import useList from '../../../utils/hooks/useList'
import { url } from '../../../api'
import { Empty } from '../../../components'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const {} = props
  const [query] = useState({})
  const [sort] = useState({})
  const [full_fields] = useState(['spec_group_info'])

  const [map] = useState()
  const { list, refresing, onRefresh, onEndReached, bottomLoading, empty } = useList(
    url.getGoodsList,
    map,
    query,
    sort,
    full_fields,
  )
  const { shops } = useIndex()

  return (
    <View style={style.wrapper}>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Banner />
            <Video />
            <Shop shops={shops} />
            {empty && <Empty />}
          </View>
        }
        columnWrapperStyle={{
          marginHorizontal: 6,
          justifyContent: 'space-between',
        }}
        keyExtractor={(item, index) => item?.uuid + index}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 5 }} />
        }}
        numColumns={2}
        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh} />}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
        renderItem={({ item }) => {
          return <Item data={item} />
        }}
      />
    </View>
  )
}

export default Index
