import React, { useEffect, useCallback, useState } from 'react'
import { ScrollView, SafeAreaView, useWindowDimensions } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { url, ajax } from '../../api'
// @ts-ignore
import HTML from 'react-native-render-html'

interface IndexProps {
  route: { params: { type_value: string; title?: string } }
}
const Index: React.FC<IndexProps> = props => {
  const {
    route: {
      params: { type_value },
    },
  } = props
  const navigation = useNavigation()
  const { width } = useWindowDimensions()
  const [data, setData] = useState<any>({})
  const detail = useCallback(() => {
    ajax({ url: url.rulesRead, data: { condition: { type_value } } })
      .then(res => {
        const { data } = res
        navigation.setOptions({ title: data?.title })
        setData(data)
      })
      .catch(err => {})
  }, [navigation, type_value])

  useEffect(() => {
    detail()
  }, [detail])

  return (
    <SafeAreaView style={style.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
        {!!data?.content && (
          <HTML
            baseFontStyle={{ lineHeight: 30 }}
            html={data?.content}
            imagesMaxWidth={width - 30}
            ignoredStyles={['line-height']}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
