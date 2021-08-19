import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import { Touchable } from '../../../components'
import { useNavigation } from '@react-navigation/native'
import useUser from '../../../utils/hooks/useUser'

interface IndexProps {
  data: any
  tag: number
}

const Index: React.FC<IndexProps> = props => {
  const { data, tag } = props
  const { title, img, url } = data
  const { navigate } = useNavigation()
  const { loginTip, userOnline } = useUser()

  return (
    <Touchable
      style={tag === 0 ? style.wrapper0 : tag === 2 ? style.wrapper2 : style.wrapper}
      onPress={() => (userOnline ? navigate(url) : loginTip(navigate))}
    >
      <Image source={img} style={style.img} resizeMode={'contain'} />
      <Text style={style.titleText}>{title}</Text>
    </Touchable>
  )
}

export default Index
