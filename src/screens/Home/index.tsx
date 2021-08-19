import React from 'react'
import { StatusBar, View } from 'react-native'
import style from './style'
import List from './List'
import Head from './Head'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  return (
    <View style={style.wrapper}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
        translucent={true}
      />
      <Head />
      <List />
    </View>
  )
}

export default Index
