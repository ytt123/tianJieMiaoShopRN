import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView, SafeAreaView, Image, Text } from 'react-native'
import styles from './style'
import useIndex from './useIndex'
import { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora'
import { useNavigation } from '@react-navigation/native'
import Bom from './Bom'
import Top from './Top'
import AdjustModal from './AdjustModal'
interface IndexProps {
  route: { params: { goodsinfo: any; shopInfo: any } }
}

const Index: React.FC<IndexProps> = props => {
  const {
    route: {
      params: { goodsinfo, shopInfo },
    },
  } = props

  const [visible, setVisible] = useState<boolean>(false)
  const { endCall, info } = useIndex('123123123')
  const { joinSucceed, peerIds, channelName } = info
  const { goBack } = useNavigation()
  //隐藏试播预览
  const [isTry, setTry] = useState<boolean>(true)

  return (
    <View style={styles.max}>
      {/* <View style={styles.max}>
        {joinSucceed ? (
          <View style={styles.fullView}>
            <RtcLocalView.SurfaceView
              style={styles.max}
              channelId={channelName}
              renderMode={VideoRenderMode.Hidden}
            />
            {
                <ScrollView
                  style={styles.remoteContainer}
                  contentContainerStyle={{ paddingHorizontal: 2.5 }}
                  horizontal={true}
                >
                  {Array.isArray(peerIds) &&
                    peerIds.map((value: any, index: number) => {
                      return (
                        <RtcRemoteView.SurfaceView
                          style={styles.remote}
                          uid={value}
                          channelId={channelName}
                          renderMode={VideoRenderMode.Hidden}
                          zOrderMediaOverlay={true}
                        />
                      )
                    })}
                </ScrollView>
              }
          </View>
        ) : null}
      </View> */}
      {isTry && <Top />}
      {isTry && (
        <Bom
          showcb={setVisible}
          livecb={() => {
            setTry(false)
          }}
        />
      )}

      <AdjustModal visible={visible} setVisible={setVisible} />
    </View>
  )
}

export default Index
