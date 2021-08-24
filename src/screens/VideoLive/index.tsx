import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, ScrollView, SafeAreaView, Image, PanResponder } from 'react-native'
import styles from './style'
import useIndex from './useIndex'
import { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora'
import { useNavigation } from '@react-navigation/native'
import Avatar from './Avatar'
import GoodsModal from './GoodsModal'
import ShareModal from './ShareModal'
import Speak from './Speak'
import useIndexRTM from './useIndexRTM'
import useIndexGoods from './useIndexGoods'
import AdjustModal from './AdjustModal'
import Function from './Function'
// import { goodsinfo, shopInfo } from './mockData'
import Bom from './Bom'
import Top from './Top'

interface IndexProps {
  route: { params: { goodsinfo: any; shopInfo: any; isFormal: boolean } }
}

const Index: React.FC<IndexProps> = props => {
  const {
    route: {
      params: { goodsinfo, shopInfo, isFormal },
    },
  } = props

  const { endCall, info: liveInfo, BeautyOptions, setBeautyOptions } = useIndex(shopInfo)
  const { endRTM, info: RTMinfo, messages } = useIndexRTM(shopInfo)
  const {
    visibleGoods,
    setVisibleGoods,
    info,
    recominfo,
    visibleRecomGoods,
    sertVisibleRecomGoods,
  } = useIndexGoods(goodsinfo)
  const { joinSucceed, peerIds, channelName } = liveInfo
  const { goBack } = useNavigation()

  const [showShare, setShowShare] = useState<boolean>(false)
  const [showBeauty, setShowBeauty] = useState<boolean>(false)

  /* ---------------------------------------------以下试播 start--------------------------------------------------- */
  const [isTry, setTry] = useState<boolean>(!isFormal)
  /* ---------------------------------------------试播 end--------------------------------------------------- */
  const [isShow, setIsShow] = useState<boolean>(true)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return !(gestureState.dx === 0 && gestureState.dy === 0)
      },
      onPanResponderGrant: (event, gestureState) => {},
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dx > 100) {
          //清屏
          setIsShow(false)
        }
        if (gestureState.dx < -100) {
          //清屏
          setIsShow(true)
        }
      },
      onPanResponderRelease: () => true,
      onPanResponderTerminationRequest: () => true,
    }),
  ).current

  const isGestureShow = isShow && !isTry
  return (
    <View style={styles.max} {...panResponder.panHandlers}>
      <View style={styles.max}>
        {joinSucceed ? (
          <View style={styles.fullView}>
            <RtcLocalView.SurfaceView
              style={styles.max}
              channelId={channelName}
              renderMode={VideoRenderMode.Hidden}
            />
          </View>
        ) : null}
      </View>

      {/* ---------------------------------------------以下试播--------------------------------------------------- */}

      {isTry && (
        <Top
          backcb={() => {
            endCall()
            endRTM()
            setTimeout(() => {
              goBack()
            }, 1000)
          }}
        />
      )}
      {isTry && (
        <Bom
          showcb={() => setShowBeauty(true)}
          livecb={() => {
            setTry(false)
          }}
        />
      )}

      {/* ---------------------------------------------以下直播--------------------------------------------------- */}
      {!isTry && (
        <Avatar
          seeNum={peerIds?.length}
          info={shopInfo}
          recomgoods={goodsinfo?.recomgoods}
          showrecomcb={() => {
            sertVisibleRecomGoods(true)
          }}
          isGestureShow={isGestureShow}
        />
      )}

      {/* 消息 */}
      {isGestureShow && <Speak messages={messages} />}

      {/* 带货商品 */}
      {isGestureShow && (
        <GoodsModal visible={visibleGoods} setVisible={setVisibleGoods} info={info} />
      )}

      {/* 推荐商品 */}
      {isGestureShow && (
        <GoodsModal
          visible={visibleRecomGoods}
          setVisible={sertVisibleRecomGoods}
          info={recominfo}
        />
      )}

      {isGestureShow && (
        <ShareModal visible={showShare} setVisible={setShowShare} info={shopInfo} />
      )}

      <AdjustModal
        visible={showBeauty}
        setVisible={setShowBeauty}
        beautyOptions={BeautyOptions}
        setBeautyOptions={setBeautyOptions}
      />
      {isGestureShow && (
        <Function
          goodsNum={goodsinfo?.goods_uuids?.length}
          showGoodscb={() => {
            setVisibleGoods(true)
          }}
          reportcb={() => {
            setShowBeauty(true)
          }}
          sharecb={() => {
            setShowShare(true)
          }}
          zancb={() => {}}
          closecb={() => {
            endCall()
            endRTM()
            setTimeout(() => {
              goBack()
            }, 1000)
          }}
        />
      )}
    </View>
  )
}

export default Index
