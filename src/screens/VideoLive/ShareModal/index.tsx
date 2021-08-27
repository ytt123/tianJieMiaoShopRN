import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, Button, Platform } from 'react-native'
import { Iconfont, Touchable } from '../../../components'
import { defaultIcon } from '../../../assets/images'
import style from './style'
// import { Modal } from '@ant-design/react-native'
import QRCode from 'react-native-qrcode-svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import useIndex from './useIndex'
import Modal from 'react-native-modal'
import * as WeChat from 'react-native-wechat-lib'

const isIOS = Platform.OS === 'ios'
interface IndexProps {
  visible: boolean
  setVisible: any
  info: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, info } = props

  const { urlStr, shareType } = useIndex()
  return (
    <View style={style.wrapper}>
      <Modal
        isVisible={visible}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onBackdropPress={() => setVisible(false)}
      >
        <View>
          <ImageBackground source={require('./assets/bg.png')} style={{}}>
            {isIOS ? (
              <TouchableWithoutFeedback
                style={style.bgwrapper}
                onPress={() => {
                  setVisible(false)
                }}
              >
                <Image source={{ uri: defaultIcon }} style={style.icon} />

                <View style={style.topWrap}>
                  <Text style={style.desText}>
                    请搜索 <Text style={style.titleText}>“{info?.name || ''}”</Text>
                  </Text>
                  <Text style={[style.desText, { marginTop: 10 }]}>正在直播中</Text>
                </View>
                <View style={style.bomWrap}>
                  <QRCode size={150} value={urlStr} />
                  <Text style={style.tipText}> 扫一扫 下载app</Text>
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <Touchable
                style={style.bgwrapper}
                onPress={() => {
                  // setVisible(false)
                }}
              >
                <Image source={{ uri: defaultIcon }} style={style.icon} />

                <View style={style.topWrap}>
                  <Text style={style.desText}>
                    请搜索 <Text style={style.titleText}>“{info?.name || ''}”</Text>
                  </Text>
                  <Text style={[style.desText, { marginTop: 10 }]}>正在直播中</Text>
                </View>
                <View style={style.bomWrap}>
                  <QRCode size={100} value={urlStr} />
                  <Text style={style.tipText}> 扫一扫 下载app</Text>
                </View>
              </Touchable>
            )}
          </ImageBackground>
          {isIOS ? (
            <View style={style.bom}>
              <TouchableWithoutFeedback
                style={style.shareItem}
                onPress={() => {
                  shareType(0)
                }}
              >
                <Image source={require('./assets/icon.png')} style={style.icon1} />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                style={style.shareItem}
                onPress={() => {
                  shareType(1)
                }}
              >
                <Image source={require('./assets/icon2.png')} style={style.icon1} />
              </TouchableWithoutFeedback>
            </View>
          ) : (
            <View style={style.bom}>
              <Touchable
                style={style.shareItem}
                onPress={() => {
                  shareType(0)
                }}
              >
                <Image source={require('./assets/icon.png')} style={style.icon1} />
              </Touchable>
              <Touchable
                style={style.shareItem}
                onPress={() => {
                  shareType(1)
                }}
              >
                <Image source={require('./assets/icon2.png')} style={style.icon1} />
              </Touchable>
            </View>
          )}
        </View>
      </Modal>
    </View>
  )
}

export default Index
