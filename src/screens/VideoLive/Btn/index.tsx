import React from 'react'
import { View, Image } from 'react-native'
import styles from './style'
import { Touchable, TouchableThrottle } from '../../../components'
interface IndexProps {
  close: any
  add: any
  setVisibleAdjust: any
}

const Index: React.FC<IndexProps> = props => {
  const { close, add, setVisibleAdjust } = props
  return (
    <View style={styles.btnWrapper}>
      <TouchableThrottle onPress={add}>
        <Image source={require('./assets/add.png')} style={styles.icon} />
      </TouchableThrottle>
      <TouchableThrottle onPress={close}>
        <Image source={require('./assets/close.png')} style={styles.icon} />
      </TouchableThrottle>
      <TouchableThrottle
        onPress={() => {
          setVisibleAdjust(true)
        }}
      >
        <Image source={require('./assets/adjust.png')} style={styles.icon} />
      </TouchableThrottle>
    </View>
  )
}

export default Index
