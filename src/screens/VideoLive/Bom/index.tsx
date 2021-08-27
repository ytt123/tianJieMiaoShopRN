import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { Iconfont, Touchable } from '../../../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ajax, url } from '../../../api'
interface IndexProps {
  showcb: any
  livecb: any

  goodsinfo: any
}
const Index: React.FC<IndexProps> = props => {
  const { showcb, livecb, goodsinfo } = props
  const { bottom } = useSafeAreaInsets()

  const { title, thum, pre_begin_time, goods_uuids, recomgoods_uuids } = goodsinfo || {}

  return (
    <View style={[style.wrapper, { height: bottom + 110 }]}>
      <Touchable style={[style.hitem, style.leftitem]} onPress={showcb}>
        <Iconfont iconfont={'\ue62c'} style={style.icon} />
        <Text style={style.leftText}>美颜</Text>
      </Touchable>

      <Touchable
        style={[style.hitem, style.centeritem]}
        onPress={async () => {
          // await ajax({ url: url.shopLiveLogsEnd })
          // await ajax({
          //   url: url.shopLiveLogsStart,
          //   data: {
          //     title,
          //     thum,
          //     pre_begin_time,
          //     goods_uuids,
          //     recommend_goods_uuids: recomgoods_uuids,
          //   },
          // })
          livecb()
        }}
      >
        <View style={style.out} />
        <Text style={style.liveText}>开始直播</Text>
      </Touchable>
    </View>
  )
}

export default Index
