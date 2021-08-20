import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useUser from '../../../utils/hooks/useUser'
interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const { top } = useSafeAreaInsets()
  const { userInfo } = useUser()
  const { avatar, nick_name, mobile } = userInfo.toJS() || {}
  return (
    <View style={[styles.iconWrapper, { top }]}>
      <Image
        source={avatar ? { uri: avatar } : require('./assets/Avatar.png')}
        style={styles.icon}
      />
      <Text style={styles.nameText}>{nick_name}</Text>
    </View>
  )
}

export default Index
