import { useCallback, useState, useEffect, useRef } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import RtcEngine, { ChannelProfile, ClientRole } from 'react-native-agora'
import requestCameraAndAudioPermission from './VideoPermission'
import { Platform } from 'react-native'
import { agoraAppid } from '../../constants/agora.config'
const useIndex = (order_no: string) => {
  // const appState = useRef(AppState.currentState)
  // const [appStateVisible, setAppStateVisible] = useState(appState.current)

  const [info, setInfo] = useState<any>({
    appId: agoraAppid,
    channelName: order_no,
    joinSucceed: false,
    peerIds: [],
  })

  const engine = useRef<any>(null)
  const { goBack } = useNavigation()

  const init = useCallback(async () => {
    const { appId } = info
    engine.current = await RtcEngine.create(appId)
    await engine.current.enableVideo()
    // 开启本地视频预览。
    await engine.current.startPreview()

    //美颜设置
    // engine.current.setBeautyEffectOptions(true, {})

    // // 将频道场景设为直播。
    // await engine.current.setChannelProfile(ChannelProfile.LiveBroadcasting)
    // // 设置用户角色为主播。
    // await engine.current.setClientRole(ClientRole.Broadcaster)
    await engine?.current?.joinChannel(null, info.channelName, null, 0)
    engine.current.addListener('UserJoined', (uid: any, elapsed: any) => {
      const { peerIds } = info
      // If new user
      if (peerIds.indexOf(uid) === -1) {
        setInfo((pre: any) => ({
          ...pre,
          // Add peer ID to state array
          peerIds: [...peerIds, uid],
        }))
      }
    })
    engine.current.addListener('UserOffline', (uid: any, reason: any) => {
      const { peerIds } = info
      setInfo((pre: any) => ({
        ...pre,
        // Remove peer ID from state array
        peerIds: peerIds.filter((id: any) => id !== uid),
      }))
    })
    // If Local user joins RTC channel
    engine.current.addListener('JoinChannelSuccess', (channel: any, uid: any, elapsed: any) => {
      // Set state variable to true
      setInfo((pre: any) => ({
        ...pre,
        joinSucceed: true,
      }))
    })
  }, [info])

  /**
   * @name startCall
   * @description Function to start the call
   */
  const startCall = useCallback(async () => {
    // Join Channel using null token and channel name
    await engine?.current?.joinChannel(null, info.channelName, null, 0)
  }, [info.channelName])

  /**
   * @name endCall
   * @description Function to end the call
   */
  const endCall = useCallback(async () => {
    // 关闭本地视频预览。
    await engine.current.stopPreview()

    // await engine?.current?.leaveChannel()

    // setInfo((pre: any) => ({ ...pre, peerIds: [], joinSucceed: false }))
  }, [])
  useEffect(() => {
    if (Platform.OS === 'android') {
      // Request required permissions from Android
      requestCameraAndAudioPermission()
        .then(res => {
          if (res) {
            init()
          } else {
            goBack()
          }
        })
        .catch(err => {
          console.log('deny!')
        })
    } else {
      init()
    }
  }, [goBack, init])
  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       endCall()
  //     }
  //   }, [endCall]),
  // )

  return { startCall, endCall, info, setInfo }
}

export default useIndex
