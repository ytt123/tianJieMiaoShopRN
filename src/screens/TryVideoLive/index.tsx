import React from 'react'
import { View, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import styles from './style'
import useIndex from './useIndex'
import { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora'
import { useNavigation } from '@react-navigation/native'

interface IndexProps {
  // route: { params: { order_no: string } }
}

const Index: React.FC<IndexProps> = props => {
  // const {
  //   route: {
  //     params: { order_no },
  //   },
  // } = props

  const { endCall, info } = useIndex('123123123')
  const { joinSucceed, peerIds, channelName } = info
  const { goBack } = useNavigation()
  return (
    <SafeAreaView style={styles.max}>
      <View style={styles.max}>
        <View style={styles.max}>
          {joinSucceed ? (
            <View style={styles.fullView}>
              <RtcLocalView.SurfaceView
                style={styles.max}
                channelId={channelName}
                renderMode={VideoRenderMode.Hidden}
              />
              {/* {
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
              } */}
            </View>
          ) : null}
        </View>
        {/* <TouchableOpacity
          style={styles.bom}
          onPress={() => {
            endCall()
            goBack()
          }}
        >
          <Image source={require('./assets/end.png')} style={styles.icon} />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  )
}

export default Index
