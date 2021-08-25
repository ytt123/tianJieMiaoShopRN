import React, { useRef, useEffect } from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import styles from './style'

interface IndexProps {
  messages: any[]
}
const Index: React.FC<IndexProps> = props => {
  const { messages = [] } = props

  const CarouselRef = useRef<any>(null)

  useEffect(() => {
    CarouselRef && CarouselRef.current.scrollToEnd()
  }, [messages])
  return (
    <View style={styles.max}>
      <FlatList
        ref={CarouselRef}
        data={messages}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => {
          //适配安卓
          CarouselRef && CarouselRef.current.scrollToEnd()
        }}
        keyExtractor={(item, index) => String(item?.createdAt)}
        renderItem={({ item, index }) => {
          const { text, user } = item

          const name1 = text.split('  ')[0] || ''
          const des1 = text.split('  ')[1] || ''
          return (
            <View style={styles.item} key={index}>
              <Text style={styles.name}>{name1}</Text>
              <View style={styles.des1}>
                <Text style={styles.des}>{des1}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Index
