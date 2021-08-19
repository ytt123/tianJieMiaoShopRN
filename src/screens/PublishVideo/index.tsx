import React from 'react'
import { SafeAreaView } from 'react-native'
import style from './style'
import Tabone from './Tabone'

interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  return (
    <SafeAreaView style={style.safe}>
      <Tabone />
    </SafeAreaView>
  )
}

export default Index
