import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useUser from '../../../utils/hooks/useUser'

import style from './style'
import { defaultIcon } from '../../../assets/images'
import { TouchableThrottle, Iconfont } from '../../../components'

interface IndexProps {
  closecb?: any
  attencb?: any
}

const Index: React.FC<IndexProps> = props => {
  const { closecb, attencb } = props
  const { top } = useSafeAreaInsets()
  const { userInfo } = useUser()
  const { avatar, nick_name, mobile } = userInfo.toJS() || {}

  return (
    <View style={[styles.iconWrapper, { top }]}>
      <View style={style.left}>
        <Image source={{ uri: avatar ? avatar : defaultIcon }} style={styles.icon} />
        <View style={style.leftcenter}>
          <Text style={styles.nameText}>{nick_name}</Text>
          <Text style={styles.nameText}>1人观看 | 0人点赞</Text>
        </View>
        <TouchableThrottle onPress={attencb}>
          <Text style={styles.attenText}>关注</Text>
        </TouchableThrottle>
      </View>

      <TouchableThrottle onPress={closecb}>
        <Iconfont iconfont={'\ue624'} style={style.cancelText} />
      </TouchableThrottle>
    </View>
  )
}

export default Index
