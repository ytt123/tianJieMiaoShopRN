import React from 'react'
import { View, RefreshControl, FlatList } from 'react-native'
import { Empty } from '../../components'
import style from './style'
import Item from './Item'
import useIndex from './useIndex'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const { list, refresing, onRefresh } = useIndex()
  return (
    <View style={style.wrapper}>
      <FlatList
        ListHeaderComponent={<>{list.length === 0 && <Empty />}</>}
        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh} />}
        keyExtractor={item => item.uuid}
        data={list}
        renderItem={({ item, index }) => {
          return <Item data={item} index={index} />
        }}
      />
    </View>
  )
}

export default Index
