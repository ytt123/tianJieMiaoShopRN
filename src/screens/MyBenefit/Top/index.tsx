import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { Iconfont } from '../../../components'
import useUser from '../../../utils/hooks/useUser'
import { imageMogr } from '../../../utils/util'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const { userInfo } = useUser()
  const { avatar, nick_name, mobile } = userInfo.toJS() || {}
  return (
    <View style={style.wrapper}>
      <Image
        source={avatar ? { uri: `${avatar}${imageMogr()}` } : require('./assets/Avatar.png')}
        style={style.avatar}
      />
      <View>
        <Text style={style.nameText}>{nick_name}</Text>
        <View style={style.phone}>
          <Iconfont iconfont={'\ue70f'} style={style.icons} />
          <Text style={style.phoneText}>{mobile}</Text>
        </View>
      </View>
    </View>
  )
}

export default Index
