import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import style from './style'
import { defaultIcon } from '../../../assets/images'
import { TouchableThrottle } from '../../../components'
import useIndex from './useIndex'

interface IndexProps {
  closecb?: any
  attencb?: any
  info: any
  recomgoods: any
  showrecomcb: any
  isGestureShow: any
  seeNum?: any
}

const Index: React.FC<IndexProps> = props => {
  const { info, recomgoods = [], showrecomcb, isGestureShow, seeNum = 0 } = props
  const { top } = useSafeAreaInsets()
  const { name, thum } = info || {}
  // console.log('peers------', seeNum)
  //取第一张图
  const firstimg = recomgoods[0]?.thum || ''
  const { hourStr, minStr, secStr } = useIndex()
  return (
    <View style={[styles.iconWrapper, { top }]}>
      <View style={style.left}>
        <Image source={{ uri: thum ? thum : defaultIcon }} style={styles.icon} />
        <View style={style.leftcenter}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.nameText}>{seeNum}人观看 | 0人点赞</Text>
        </View>
      </View>

      {isGestureShow && (
        <TouchableThrottle onPress={() => {}} style={style.addright}>
          <View style={style.pointText} />
          <Text style={{ color: '#fff' }}>
            {hourStr}:{minStr}:{secStr}
          </Text>
        </TouchableThrottle>
      )}

      {isGestureShow && (
        <TouchableThrottle style={style.recomgoods} onPress={showrecomcb}>
          <Image source={{ uri: firstimg }} style={{ width: '100%', height: '100%' }} />
          <View style={style.recom}>
            <Text style={style.recomText}>推荐</Text>
          </View>
        </TouchableThrottle>
      )}
    </View>
  )
}

export default Index
