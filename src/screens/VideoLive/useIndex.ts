import { useCallback, useState, useEffect, useRef } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import RtcEngine, { ChannelProfile, ClientRole } from 'react-native-agora'
import requestCameraAndAudioPermission from './VideoPermission'
import { Platform } from 'react-native'
import { agoraAppid } from '../../constants/agora.config'
import useSpinner from '../../utils/hooks/useSpinner'
import { ajax, url } from '../../api'
const useIndex = (shopInfo: any) => {
  // enum LighteningContrastLevel {
  //   Low = 0,
  //   Normal = 1,
  //   High,
  // }

  const [BeautyOptions, setBeautyOptions] = useState({
    lighteningLevel: 0.7,
    rednessLevel: 0.1,
    smoothnessLevel: 0.5,
    lighteningContrastLevel: 1,
  })

  const { shop_live_log_info } = shopInfo
  const { uuid } = shop_live_log_info || {}

  const [info, setInfo] = useState<any>({
    appId: agoraAppid,
    channelName: uuid,
    joinSucceed: false,
    peerIds: [],
  })
  const [isOpenBeauty, setIsOpenBeauty] = useState(false)
  const engine = useRef<any>(null)
  const { goBack } = useNavigation()
  const { spinningChange } = useSpinner()
  const init = useCallback(async () => {
    const { appId } = info
    engine.current = await RtcEngine.create(appId)
    await engine.current.enableVideo()
    // 开启本地视频预览。
    await engine.current.startPreview()
    // 将频道场景设为直播。
    await engine.current.setChannelProfile(ChannelProfile.LiveBroadcasting)
    // 设置用户角色为主播。
    await engine.current.setClientRole(ClientRole.Broadcaster)
    await engine?.current?.joinChannel(null, info.channelName, null, 0)

    await engine.current.setBeautyEffectOptions(isOpenBeauty, BeautyOptions)

    engine.current.addListener('UserJoined', (uid: any, elapsed: any) => {
      console.log('我自己的uid---------', uid)
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
      console.log('qJoinChannelSuccess----------', channel, uid)
      setInfo((pre: any) => ({
        ...pre,
        joinSucceed: true,
      }))
    })
  }, [BeautyOptions, info, isOpenBeauty])

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
    spinningChange(true)
    // 关闭本地视频预览。
    await engine.current.stopPreview()
    // 关闭本地视频采集。
    // await engine.current.enableLocalVideo(false)
    await engine.current.leaveChannel()

    ajax({ url: url.shopLiveLogsEnd })
      .then(res => {
        console.log(JSON.stringify(res, null, 2))
        spinningChange(false)
      })
      .catch(err => {
        spinningChange(false)
      })

    // setInfo((pre: any) => ({ ...pre, peerIds: [], joinSucceed: false }))
  }, [spinningChange])
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
      setTimeout(() => {
        init()
      }, 1000)
    }
  }, [goBack, init])

  return {
    startCall,
    endCall,
    info,
    setInfo,
    BeautyOptions,
    setBeautyOptions,
    isOpenBeauty,
    setIsOpenBeauty,
  }
}

export default useIndex
