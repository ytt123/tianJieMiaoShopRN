import React from 'react'
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native'
import style from './style'
import { GOODSNUM } from '../../../utils/regexp'
import { Toast } from '@ant-design/react-native'
interface IndexProps {
  min?: number
  max?: number
  num: number
  setNum: any
}

const Index: React.FC<IndexProps> = props => {
  const { num, setNum } = props
  const { min = 1, max = 10000 } = props || {}

  return (
    <View style={style.wrapper}>
      <Text style={style.titleText}>数量</Text>
      <View style={style.stepper}>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          onPress={() => {
            if (Number(num) > min) {
              setNum(Number(num) - 1 + '')
            } else {
              Toast.show('商品数量不能为0')
            }
          }}
        >
          <Image source={require('./assets/low.png')} style={style.img} />
        </TouchableOpacity>

        <TextInput
          style={style.input}
          placeholder=" "
          keyboardType={'number-pad'}
          value={num + ''}
          onChangeText={text => {
            const t = text.trim()

            const bool = min <= Number(t) && max >= Number(t)

            if (GOODSNUM.test(text)) {
              bool && setNum(Number(t))
            }
          }}
        />
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          onPress={() => {
            if (Number(num) < max) {
              setNum(Number(num) + 1)
            } else {
              Toast.show('商品单次购买数量已达上限')
            }
          }}
        >
          <Image source={require('./assets/add.png')} style={style.img} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Index
