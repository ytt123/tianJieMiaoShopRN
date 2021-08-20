import { useCallback, useState, useEffect, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import RtmEngine from 'agora-react-native-rtm'
import { GiftedChat } from 'react-native-gifted-chat'
import { EventEmitter } from 'events'
import { agoraAppid } from '../../constants/agora.config'

const useIndex = (shopInfo: any) => {
  const { shop_live_log_info } = shopInfo
  const { uuid } = shop_live_log_info || {}
  console.log('rtm需要的uuid', uuid)
  const [info, setInfo] = useState<any>({
    appId: agoraAppid,
    channelName: uuid,
    joinSucceed: false,
    peerIds: [],
    uid: null,
  })
  const [messages, setMessages] = useState<any[]>([])

  const engine = useRef<any>(null)

  const init = useCallback(async () => {
    const { appId, channelName } = info

    engine.current = new RtmEngine()

    var ee = new EventEmitter()
    const events = [
      'tokenExpired',
      'remoteInvitationRefused',
      'remoteInvitationFailure',
      'remoteInvitationCanceled',
      'remoteInvitationAccepted',
      'messageReceived',
      'localInvitationRefused',
      'localInvitationReceivedByPeer',
      'localInvitationFailure',
      'localInvitationCanceled',
      'localInvitationAccepted',
      'error',
      'connectionStateChanged',
      'channelMessageReceived',
      'channelMemberLeft',
      'channelMemberJoined',
      'remoteInvitationReceived',
    ]
    events.forEach((event: string) => {
      // @ts-ignore
      engine.current.on(event, (evt: any) => {
        // console.warn('各类通知-------', event, evt)
        ee.emit(event, evt)
      })
    })

    await engine.current.createClient(appId)
    let time = `${+new Date()}`
    await engine.current.login({ uid: time })

    await setInfo((pre: any) => ({
      ...pre,
      uid: time,
    }))

    await engine.current.joinChannel(channelName)

    engine.current.on('error', (evt: any) => {
      console.log('发生错误')
    })

    engine.current.on('channelMessageReceived', (evt: any) => {
      const { uid, channelId, text } = evt
      // console.log('获取到的信息', JSON.stringify(evt, null, 2))
      if (channelId === channelName) {
        setMessages(prevState =>
          GiftedChat.append(prevState, [
            {
              _id: +new Date(),
              text,
              user: {
                _id: uid,
                name: uid.substr(uid.length - 1, uid.length),
              },
              createdAt: new Date(),
            },
          ]),
        )
      }
    })
  }, [info])

  const endRTM = useCallback(async () => {
    const { channelName } = info
    await engine.current.leaveChannel(channelName)
    await engine.current.logout()
    await engine.current.destroy()
  }, [info])
  useEffect(() => {
    init()
  }, [init])

  return { endRTM, info, setInfo, messages }
}

export default useIndex
