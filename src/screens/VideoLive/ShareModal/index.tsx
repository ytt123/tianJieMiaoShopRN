import React, { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Iconfont, Touchable } from '../../../components'
import style from './style'
import { Modal } from '@ant-design/react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useIndex from './useIndex'
interface IndexProps {
  visible: boolean
  setVisible: any
  setInfo: any
  info: any
  allInfo: any
  live_log_uuid: string
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, setInfo, info, allInfo, live_log_uuid } = props
  const [map, setMap] = useState({})
  const { bottom } = useSafeAreaInsets()
  const { update } = useIndex(allInfo, info, live_log_uuid)
  // console.log('222--------', JSON.stringify(allInfo, null, 2), info)

  return (
    <View style={style.wrapper}>
      <Modal
        // popup
        style={{ backgroundColor: 'red', width: '100%' }}
        maskClosable
        visible={visible}
        transparent
        // animationType="slide-up"
        // onClose={() => {
        //   setMap({ name: '' })
        //   setVisible(false)
        // }}
      >
        <ImageBackground source={require('./assets/bg.png')} style={[style.bgwrapper]}>
          <Text>请搜索“韩梅梅美衣馆”</Text>
          <Text>正在直播中</Text>


          <Text> 扫一扫 下载app</Text>
        </ImageBackground>
      </Modal>
    </View>
  )
}

export default Index
