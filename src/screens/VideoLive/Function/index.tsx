import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './style'
import { Touchable, TouchableThrottle, Iconfont } from '../../../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  showGoodscb?: any
  reportcb?: any
  sharecb?: any
  zancb?: any
}

const Index: React.FC<IndexProps> = props => {
  const { showGoodscb, reportcb, sharecb, zancb } = props
  const { bottom } = useSafeAreaInsets()
  return (
    <View style={[styles.btnWrapper, { bottom: bottom + 44 }]}>
      {/* <TouchableThrottle onPress={add}>
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
      </TouchableThrottle> */}
      <TouchableThrottle onPress={showGoodscb}>
        <Image source={require('./assets/shopcart.png')} style={styles.icon} />
        <View style={{ position: 'absolute', top: -25 }}>
          <Text
            style={{
              color: '#FF2442',
              fontSize: 10,
              lineHeight: 20,
              backgroundColor: '#fff',
              width: 60,
              textAlign: 'center',
            }}
          >
            50件商品
          </Text>
        </View>
      </TouchableThrottle>

      <View style={styles.bomcenter}>{/* <Text>xxxxx</Text> */}</View>
      <TouchableThrottle style={styles.rightitem} onPress={reportcb}>
        <Iconfont iconfont={'\ue607'} style={styles.iconText} />
        <Text style={styles.rightText}>举报</Text>
      </TouchableThrottle>
      <TouchableThrottle style={styles.rightitem} onPress={sharecb}>
        <Iconfont iconfont={'\ue6ea'} style={styles.iconText} />
        <Text style={styles.rightText}>分享</Text>
      </TouchableThrottle>
      <TouchableThrottle style={styles.rightitem} onPress={zancb}>
        <Iconfont iconfont={'\ue668'} style={styles.iconText} />
        <Text style={styles.rightText}>100</Text>
      </TouchableThrottle>
    </View>
  )
}

export default Index
