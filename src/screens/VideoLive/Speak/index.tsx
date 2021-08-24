import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import styles from './style'

interface IndexProps {
  messages: any[]
}
const Index: React.FC<IndexProps> = props => {
  const { messages = [] } = props

  return (
    <View style={styles.max}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {messages
          .reverse()
          .slice(-10)
          .map((item, index) => {
            const { text, user } = item
            const { name } = user || {}

            // const tarr = text.split(' ')
            // const name1 = tarr[0] || ''
            // const des1 = tarr[1] || ''
            return <Text key={index}>{text}</Text>
          })}
      </ScrollView>
    </View>
  )
}

export default Index
