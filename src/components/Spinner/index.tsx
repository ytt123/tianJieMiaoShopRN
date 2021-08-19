import React from 'react'
//@ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import { useSelector } from 'react-redux'

interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const spinning = useSelector<any, boolean>(state => state.getIn(['init', 'spinning']))
  return <Spinner visible={spinning} />
}

export default Index
