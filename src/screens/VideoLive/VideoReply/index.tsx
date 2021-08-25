import React, { useRef, useEffect, useCallback, useState } from 'react'
import { TextInput, KeyboardAvoidingView, Platform, Keyboard, View } from 'react-native'
import style from './style'

interface IndexProps {
  onSend: any
  uid: any
  showKb: boolean
  setShowKb: any
  info: any
}
const Index: React.FC<IndexProps> = props => {
  const { onSend, uid, showKb, setShowKb, info = {} } = props
  const textinputRef = useRef<any>(null)
  const { name } = info

  const [hh, sethh] = useState(400)
  useEffect(() => {
    showKb && textinputRef.current.focus()
  }, [showKb])

  const _keyboardDidShow = useCallback(e => {
    sethh(e.endCoordinates.height)
  }, [])

  useEffect(() => {
    let keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', _keyboardDidShow)

    return () => {
      keyboardDidShowListener.remove()
    }
  }, [_keyboardDidShow])

  return (
    <>
      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView enabled={true} behavior={'padding'}>
          <TextInput
            style={[
              style.input,
              {
                height: showKb ? 44 : 0,
              },
            ]}
            placeholder="说点什么…"
            onBlur={() => {
              setShowKb(false)
            }}
            onEndEditing={event => {
              const text = event.nativeEvent.text.trim()
              if (text.length > 0) {
                onSend([
                  {
                    _id: +new Date(),
                    text: name.slice(0, 6) + '  ' + text,
                    user: {
                      _id: uid,
                      name: name,
                    },
                    createdAt: new Date(),
                  },
                ])
                textinputRef.current.clear()
              }
            }}
            maxLength={20}
            ref={textinputRef}
            returnKeyType={'send'}
            returnKeyLabel={'发送'}
            placeholderTextColor={'#999'}
          />
        </KeyboardAvoidingView>
      ) : (
        <View style={{ opacity: showKb ? 1 : 0 }}>
          <TextInput
            style={[
              style.input,
              { bottom: hh },
              {
                height: showKb ? 44 : 0,
              },
            ]}
            placeholder="说点什么… "
            onBlur={() => {
              setShowKb(false)
            }}
            onEndEditing={event => {
              const text = event.nativeEvent.text.trim()
              if (text.length > 0) {
                onSend([
                  {
                    _id: +new Date(),
                    text: name.slice(0, 6) + '  ' + text,
                    user: {
                      _id: uid,
                      name,
                    },
                    createdAt: new Date(),
                  },
                ])
                textinputRef.current.clear()
              }
            }}
            maxLength={20}
            ref={textinputRef}
            returnKeyType={'send'}
            returnKeyLabel={'发送'}
            placeholderTextColor={'#999'}
          />
        </View>
      )}
    </>
  )
}

export default Index
