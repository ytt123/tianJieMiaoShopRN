import React, { useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import style from './style'
import Top from './Top'
import Item from './Item'
import { ajax, url } from '../../api'
import { Toast } from '@ant-design/react-native'
interface IndexProps {
  route: {
    params: {
      data: any
    }
  }
}

const Index: React.FC<IndexProps> = props => {
  const {
    route: {
      params: { data },
    },
  } = props
  const { express_company, express_no, goods_info } = data || {}
  // thum
  useEffect(() => {
    ajax({ url: url.expressQueryByKdn, data: { express_company, express_no } })
      .then(res => {})
      .catch(err => {
        const { data } = err
        Toast.show(data?.msg)
      })
  }, [express_company, express_no])
  return (
    <SafeAreaView style={style.wrapper}>
      <ScrollView style={style.wrapper}>
        <Top />
        <View style={style.center}>
          <Text>订单跟踪</Text>
        </View>
        {['1', '2'].map((item, index) => {
          return <Item key={index} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
