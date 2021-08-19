import React from 'react'
import { SafeAreaView } from 'react-native'
import style from './style'
import Num from './Num'
import Top from './Top'
import Bom from './Bom'
import useIndex from './useIndex'
interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const { info } = useIndex()
  return (
    <SafeAreaView style={style.wrapper}>
      <Top />
      <Num data={info} />
      <Bom data={info} />
    </SafeAreaView>
  )
}

export default Index
