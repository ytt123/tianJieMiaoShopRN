import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, Button } from 'react-native'
import { Iconfont, Touchable } from '../../../components'
import { defaultIcon } from '../../../assets/images'
import style from './style'
// import { Modal } from '@ant-design/react-native'
import QRCode from 'react-native-qrcode-svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import useIndex from './useIndex'
import Modal from 'react-native-modal'
interface IndexProps {
  visible: boolean
  setVisible: any
  info: any
  allInfo: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, info, allInfo } = props

  return (
    <View style={style.wrapper}>
      <Modal
        isVisible={visible}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onBackdropPress={() => console.log(123123)}
      >
        <ImageBackground source={require('./assets/bg.png')} style={{}}>
          <TouchableWithoutFeedback
            style={style.bgwrapper}
            onPress={() => {
              setVisible(false)
            }}
          >
            <Image source={{ uri: defaultIcon }} style={style.icon} />

            <View style={style.topWrap}>
              <Text style={style.desText}>
                请搜索 <Text style={style.titleText}>“韩梅梅美衣馆”</Text>
              </Text>
              <Text style={[style.desText, { marginTop: 10 }]}>正在直播中</Text>
            </View>
            <View style={style.bomWrap}>
              <QRCode size={150} value={'ssss'} />
              <Text style={style.tipText}> 扫一扫 下载app</Text>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </Modal>
    </View>
  )
}

export default Index
