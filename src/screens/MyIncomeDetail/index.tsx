import React, { useState } from 'react'
import { SafeAreaView, FlatList, RefreshControl, ActivityIndicator, View } from 'react-native'
import style from './style'
import { listStyle } from '../../style/listStyle'
import useIndex from './useIndex'
import Top from './Top'
import { url } from '../../api'
import useList from '../../utils/hooks/useList'
import { Empty } from '../../components'
import Item from './Item'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const { typeValue, type, select } = useIndex()
  const [time, setTime] = useState<any>({})

  const { list, refresing, onRefresh, onEndReached, bottomLoading, empty } = useList(
    url.assetLogsList,
    type,
    time,
  )

  return (
    <SafeAreaView style={style.safe}>
      <Top typeValue={typeValue} selectType={select} selectTime={setTime} />
      <FlatList
        ListHeaderComponent={<>{empty && <Empty />}</>}
        ListFooterComponent={<ActivityIndicator animating={bottomLoading} />}
        ListFooterComponentStyle={listStyle.footer}
        onEndReachedThreshold={0.3}
        ItemSeparatorComponent={() => <View style={style.line} />}
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
