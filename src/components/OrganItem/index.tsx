import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import style from './style'
import { imageMogr } from '../../utils/util'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import useOrderInit from '../../utils/hooks/useOrderInit'
import useUser from '../../utils/hooks/useUser'

interface IndexProps {
  data: any
  type?: string
}
//医院
const Index: React.FC<IndexProps> = props => {
  const { data = {}, type } = props
  const { thum, name, intro, address, tags = [], distance, province, city, area, uuid } = data

  const { navigate } = useNavigation()
  const { updateServiceOrderInfo } = useOrderInit()
  const { userOnline, loginTip } = useUser()

  return (
    <TouchableOpacity
      style={style.wrapper}
      activeOpacity={1}
      onPress={() => {
        if (type === 'choose') {
          updateServiceOrderInfo({ hospitalInfo: data })
          navigate(mainScreenConfig.ServiceDetail.name)
        } else {
          if (userOnline) {
            navigate(mainScreenConfig.HospitalDetail.name, { uuid })
          } else {
            loginTip(navigate)
          }
        }
      }}
    >
      <Image
        source={thum ? { uri: `${thum}${imageMogr()}` } : require('../assets/cate1.png')}
        style={style.icon}
      />
      <View style={style.right}>
        <Text style={style.titleText}>{name}</Text>
        <View style={style.tagWrap}>
          <Text style={style.tagText}>{intro && intro.trim()}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={style.desText}>
            {province}
            {city}
            {area}
            {address}
            {!!distance && <Text>{Math.floor(distance / 10) / 100}km </Text>}
          </Text>
        </View>
        {tags.map((item: any, index: number) => {
          return <Text style={style.desText1}>{item}</Text>
        })}
      </View>
    </TouchableOpacity>
  )
}

export default Index
