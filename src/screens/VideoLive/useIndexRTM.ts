import { useCallback, useState, useEffect, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import RtmEngine from 'agora-react-native-rtm'

import { EventEmitter } from 'events'
import { agoraAppid } from '../../constants/agora.config'

const useIndex = (shopInfo: any) => {
  const { shop_live_log_info } = shopInfo
  const { uuid } = shop_live_log_info || {}

  const [appId] = useState(agoraAppid)
  const [channelName] = useState(uuid)
  const [uid, setUid] = useState('')
  const [messages, setMessages] = useState<any[]>([])
  const engine = useRef<any>(null)
  const init = useCallback(async () => {
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
        console.warn('各类通知-------', event, evt)
        ee.emit(event, evt)
      })
    })

    await engine.current.createClient(appId)
    let time = `${+new Date()}`
    await engine.current.login({ uid: time })

    setUid(time)

    await engine.current.joinChannel(channelName)

    engine.current.on('error', (evt: any) => {
      console.log('发生错误')
    })

    engine.current.on('channelMessageReceived', async (evt: any) => {
      const { uid, channelId, text } = evt
      if (channelId === channelName) {
        setMessages((pre: any) => [
          ...pre,
          {
            _id: +new Date(),
            text,
            user: {
              _id: uid,
              name: uid.substr(uid.length - 1, uid.length),
            },
            createdAt: new Date(),
          },
        ])
      }
    })
  }, [appId, channelName])

  const onSend = useCallback(
    (messages: any[] = []) => {
      messages.forEach((message: any) => {
        engine.current
          .sendMessageByChannelId(channelName, `${message.text}`)
          .then(res => {
            setMessages((pre: any) => [...pre, message])
          })
          .catch(err => {
            console.warn('send failured', err)
          })
      })
    },
    [channelName],
  )

  const endRTM = useCallback(async () => {
    await engine.current.leaveChannel(channelName)
    // await engine.current.logout()
    // await engine?.current?.destroy() //已弃用
  }, [channelName])
  useEffect(() => {
    init()
  }, [init])
  useFocusEffect(
    useCallback(() => {
      return () => {
        console.log('退出rtm')
        endRTM()
      }
    }, [endRTM]),
  )

  return { onSend, endRTM, uid, messages }
}

export default useIndex
