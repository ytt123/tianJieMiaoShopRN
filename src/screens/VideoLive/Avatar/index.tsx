import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useUser from '../../../utils/hooks/useUser'

import style from './style'
import { defaultIcon } from '../../../assets/images'
import { TouchableThrottle, Iconfont } from '../../../components'
import useIndex from './useIndex'

interface IndexProps {
  closecb?: any
  attencb?: any
  info: any
  recomgoods: any
  showrecomcb: any
}

const Index: React.FC<IndexProps> = props => {
  const { closecb, attencb, info, recomgoods = [], showrecomcb } = props
  const { top } = useSafeAreaInsets()

  const { name, thum } = info || {}

  //取第一张图
  const firstimg = recomgoods[0]?.thum || ''
  const { hourStr, minStr, secStr } = useIndex()
  return (
    <View style={[styles.iconWrapper, { top }]}>
      <View style={style.left}>
        <Image source={{ uri: thum ? thum : defaultIcon }} style={styles.icon} />
        <View style={style.leftcenter}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.nameText}>1人观看 | 0人点赞</Text>
        </View>
        {/* <TouchableThrottle onPress={attencb}>
          <Text style={styles.attenText}>关注</Text>
        </TouchableThrottle> */}
      </View>

      <TouchableThrottle onPress={() => {}} style={style.addright}>
        {/* <Iconfont iconfont={'\ue624'} style={style.cancelText} /> */}
        <View style={style.pointText} />
        <Text style={{ color: '#fff' }}>
          {hourStr}:{minStr}:{secStr}
        </Text>
      </TouchableThrottle>

      <TouchableThrottle style={style.recomgoods} onPress={showrecomcb}>
        <Image source={{ uri: firstimg }} style={{ width: '100%', height: '100%' }} />
        <View style={style.recom}>
          <Text style={style.recomText}>推荐</Text>
        </View>
      </TouchableThrottle>
    </View>
  )
}

export default Index
