import React, { useState, useRef, useCallback } from 'react'
import { View, PanResponder, Keyboard } from 'react-native'
import styles from './style'
import useIndex from './useIndex'
import { RtcLocalView, VideoRenderMode } from 'react-native-agora'
import { useNavigation } from '@react-navigation/native'
import Avatar from './Avatar'
import GoodsModal from './GoodsModal'
import ShareModal from './ShareModal'
import Speak from './Speak'
import useIndexRTM from './useIndexRTM'
import useIndexGoods from './useIndexGoods'
import AdjustModal from './AdjustModal'
import Function from './Function'

import Bom from './Bom'
import Top from './Top'
import VideoReply from './VideoReply'

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
  const { endRTM, uid, messages, onSend } = useIndexRTM(shopInfo)

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

  const [isShow, setIsShow] = useState<boolean>(true)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return !(gestureState.dx === 0 && gestureState.dy === 0)
      },
      onPanResponderGrant: (event, gestureState) => {},
      onPanResponderMove: (event, gestureState) => {
        Keyboard.dismiss()
        console.log(1231213, gestureState)
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

  /* ---------------------------------------------以下试播 start--------------------------------------------------- */
  const [isTry, setTry] = useState<boolean>(!isFormal)
  /* ---------------------------------------------试播 end--------------------------------------------------- */
  const isGestureShow = isShow && !isTry

  /**-------------------------- ------------- ------------控制键盘- ------------- ------------- ------------- -------------  */
  const [showKb, setShowKb] = useState(false)
  const showcb = useCallback(() => {
    setShowKb(true)
  }, [])

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
          goodsinfo={goodsinfo}
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
          type={'推荐商品'} //推荐商品
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
          showcb={showcb}
          closecb={() => {
            endCall()
            endRTM()
            setTimeout(() => {
              goBack()
            }, 1000)
          }}
        />
      )}

      {isGestureShow && (
        <VideoReply
          onSend={onSend}
          uid={uid}
          showKb={showKb}
          setShowKb={setShowKb}
          info={shopInfo}
        />
      )}
    </View>
  )
}

export default Index
