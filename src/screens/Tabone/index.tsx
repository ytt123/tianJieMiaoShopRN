import React, { useState } from 'react'
import { SafeAreaView, StatusBar, FlatList, RefreshControl } from 'react-native'
import TabText from './Text'
import style from './style'
//@ts-ignore
import { SegmentedBar } from 'teaset'
import Top from './Top'
import TopTwo from './TopTwo'
import useIndex from './useIndex'
import { Empty } from '../../components'
import Item from './Item'
const tabs = ['今日销量排行', '今日规格排行', '今日收藏排行']
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const [tabIndex, setTabIndex] = useState(0)
  const { topInfo, list, list2, list3, refresing, onRefresh } = useIndex()
  const finallyList = tabIndex === 0 ? list : tabIndex === 1 ? list2 : list3
  return (
    <SafeAreaView style={style.wrapper}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
        translucent={true}
      />
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        ListHeaderComponent={
          <>
            <Top data={topInfo} />
            <TopTwo data={topInfo} />
            <SegmentedBar
              style={style.seg}
              onChange={(index: number) => {
                setTabIndex(index)
              }}
              activeIndex={tabIndex}
            >
              {tabs.map((cur, index: number) => {
                return <TabText text={cur} key={index} isSele={index === tabIndex} />
              })}
            </SegmentedBar>

            {finallyList.length === 0 && <Empty />}
          </>
        }
        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh} />}
        keyExtractor={item => item.uuid}
        data={finallyList}
        renderItem={({ item, index }) => {
          return <Item data={item} index={index} tabIndex={tabIndex} />
        }}
      />
    </SafeAreaView>
  )
}

export default Index
