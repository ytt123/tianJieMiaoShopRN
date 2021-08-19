import React, { useState } from 'react'
import { ActivityIndicator, RefreshControl, FlatList, Text, SafeAreaView } from 'react-native'
import { Empty } from '../../components'
import { listStyle } from '../../style/listStyle'
import style from './style'
import { url } from '../../api'
import Item from './Item'
import useList from '../../utils/hooks/useList'
import {} from 'react-native-safe-area-context'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const [map] = useState({})
  const [query_condition] = useState({})
  const [full_fields] = useState({})
  const { list, refresing, onRefresh, onEndReached, bottomLoading, empty } = useList(
    url.loginLogsList,
    map,
    query_condition,
    full_fields,
  )

  return (
    <SafeAreaView style={style.wrapper}>
      <Text style={style.titleText}>如非本人操作，请及时修改密码，确保账户安全</Text>
      <FlatList
        ListHeaderComponent={<>{empty && <Empty />}</>}
        ListFooterComponent={<ActivityIndicator animating={bottomLoading} />}
        ListFooterComponentStyle={listStyle.footer}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh} />}
        keyExtractor={item => item.uuid}
        data={list}
        renderItem={({ item, index }) => {
          return <Item data={item} />
        }}
      />
    </SafeAreaView>
  )
}

export default Index
