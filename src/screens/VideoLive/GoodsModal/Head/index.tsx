import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import style from './style'
import Iconfont from '../../../../components/Iconfont'
interface IndexProps {
  map: any
  setMap: any
}
const Index: React.FC<IndexProps> = props => {
  const { map, setMap } = props
  const [value] = useState(map?.name)

  return (
    <View style={[style.wrapper]}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={style.center}>
          <Iconfont iconfont={'\ue744'} style={style.searchicon} />
          <TextInput
            onEndEditing={event => {
              const text = event.nativeEvent.text.trim()
              setMap((pre: any) => ({ ...pre, name: text.trim() }))
            }}
            defaultValue={value}
            returnKeyLabel={'搜索'}
            returnKeyType={'search'}
            style={style.input}
            placeholder={'请输入商品名称'}
            placeholderTextColor={'#999'}
          />
        </View>
      </View>
    </View>
  )
}

export default Index
