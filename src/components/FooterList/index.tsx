import React from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import styles from './style'

interface IndexProps {
  data: any[]
  renderItem: any
  showsVerticalScrollIndicator?: boolean
  ListHeaderComponent?: any
  ListFooterComponent?: any
  columnWrapperStyle?: any
  keyExtractor?: any
  ItemSeparatorComponent?: any
  numColumns?: number
  refreshControl?: any
  onEndReachedThreshold?: any
  onEndReached?: any
  isloaded?: any
  bottomLoading?: any
  ListFooterComponentStyle?: any
  style?: any
  onScroll?: any
  scrollEventThrottle?: any
  initialNumToRender?: number
  pagingEnabled?: boolean
  getItemLayout?: any
  ref?: any
}

const Index: React.FC<IndexProps> = (props: any) => {
  const {
    data = [],
    renderItem,
    showsVerticalScrollIndicator,
    ListHeaderComponent,
    ListFooterComponent,
    ListFooterComponentStyle,
    columnWrapperStyle,
    keyExtractor,
    ItemSeparatorComponent,
    numColumns,
    refreshControl,
    onEndReachedThreshold,
    onEndReached,
    isloaded = 1,
    bottomLoading = 0,
    style = {},
    onScroll,
    scrollEventThrottle,
    initialNumToRender,
    pagingEnabled,
    getItemLayout,
    ref,
  } = props

  return (
    <FlatList
      ref={ref}
      onScroll={onScroll}
      initialNumToRender={initialNumToRender}
      pagingEnabled={pagingEnabled}
      getItemLayout={getItemLayout}
      scrollEventThrottle={scrollEventThrottle}
      data={data}
      style={style}
      renderItem={renderItem}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={() => (
        <View style={styles.footer}>
          {isloaded ? (
            <Text style={styles.bomText}>到底了亲～ </Text>
          ) : (
            <View style={styles.loading}>
              <ActivityIndicator animating={bottomLoading} />
              <Text style={styles.bomText}>加载中... </Text>
            </View>
          )}
        </View>
      )}
      // ListFooterComponentStyle={styles.footer}
      columnWrapperStyle={columnWrapperStyle}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparatorComponent}
      numColumns={numColumns}
      refreshControl={refreshControl}
      onEndReachedThreshold={onEndReachedThreshold}
      onEndReached={onEndReached}
    />
  )
}

export default Index
