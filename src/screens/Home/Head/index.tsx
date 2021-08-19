import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import Iconfont from '../../../components/Iconfont'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../../config/mainScreen.config'
import useUser from '../../../utils/hooks/useUser'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  city?: any
}
const Index: React.FC<IndexProps> = props => {
  const { city } = props
  const { navigate } = useNavigation()

  const { userOnline, loginTip } = useUser()
  const toChoosePotion = useCallback(() => {
    navigate(mainScreenConfig.SearchPosition.name)
  }, [navigate])
  const toMessages = useCallback(() => {
    navigate(mainScreenConfig.Messages.name)
  }, [navigate])
  const { top } = useSafeAreaInsets()
  return (
    <View
      // style={[style.wrapper, { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}
      style={[style.wrapper, { height: 44 + top, paddingTop: top }]}
    >
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={style.position}
          onPress={() => {
            userOnline ? toChoosePotion() : loginTip(navigate)
          }}
        >
          <Iconfont iconfont={'\ue650'} style={style.addressIcon} />
          <Text numberOfLines={1} style={style.positionText}>
            {city || '...'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={style.center}
          onPress={() => {
            userOnline ? navigate(mainScreenConfig.Search.name) : loginTip(navigate)
          }}
        >
          <Iconfont
            iconfont={'\ue744'}
            style={{
              color: '#af7579',
              fontSize: 16,
              marginLeft: 10,
              marginRight: 5,
            }}
          />
          <Text style={style.centerText}>请输入商品名称</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.topRight}
          onPress={() => {
            toMessages()
          }}
        >
          <Text style={style.topRightText}>天街喵</Text>
        </TouchableOpacity>

        {/*


        <View style={style.item}>
          <Text>天街喵</Text>
        </View> */}
      </View>
    </View>
  )
}

export default Index
