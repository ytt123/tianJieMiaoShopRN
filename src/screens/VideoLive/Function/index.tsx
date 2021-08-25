import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './style'
import { TouchableThrottle, Iconfont, Touchable } from '../../../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  showGoodscb?: any
  reportcb?: any
  sharecb?: any
  zancb?: any
  closecb?: any
  goodsNum: number
  showcb: any
}

const Index: React.FC<IndexProps> = props => {
  const { showGoodscb, reportcb, sharecb, closecb, goodsNum, showcb } = props
  const { bottom } = useSafeAreaInsets()
  return (
    <View style={[styles.btnWrapper, { bottom: bottom > 20 ? bottom : 30 }]}>
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
              borderRadius: 5,
            }}
          >
            {goodsNum}件商品
          </Text>
        </View>
      </TouchableThrottle>

      <View style={styles.bomcenter}>
        <Touchable onPress={showcb}>
          <Text style={styles.inputText}>说点什么…</Text>
        </Touchable>
      </View>
      <TouchableThrottle style={styles.rightitem} onPress={reportcb}>
        <Iconfont iconfont={'\ue62c'} style={styles.iconText} />
        <Text style={styles.rightText}>美颜</Text>
      </TouchableThrottle>
      <TouchableThrottle style={styles.rightitem} onPress={sharecb}>
        <Iconfont iconfont={'\ue6ea'} style={styles.iconText} />
        <Text style={styles.rightText}>分享</Text>
      </TouchableThrottle>
      <TouchableThrottle style={styles.rightitem} onPress={closecb}>
        <Iconfont iconfont={'\ue624'} style={styles.iconText} />
        <Text style={styles.rightText}>关闭</Text>
      </TouchableThrottle>
    </View>
  )
}

export default Index
