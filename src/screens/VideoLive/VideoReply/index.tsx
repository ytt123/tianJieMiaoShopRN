import React, { useRef, useEffect } from 'react'
import { TextInput, KeyboardAvoidingView } from 'react-native'
import style from './style'
import useUser from '../../../utils/hooks/useUser'
interface IndexProps {
  onSend: any
  uid: any
  showKb: boolean
  setShowKb: any
}
const Index: React.FC<IndexProps> = props => {
  const { onSend, uid, showKb, setShowKb } = props
  const textinputRef = useRef<any>(null)
  const { userInfo } = useUser()
  const { nick_name } = userInfo.toJS() || {}
  useEffect(() => {
    showKb && textinputRef.current.focus()
  }, [showKb])
  return (
    <KeyboardAvoidingView enabled={true} behavior={'padding'}>
      <TextInput
        style={[style.input, { height: showKb ? 44 : 0 }]}
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
                text: nick_name.slice(0, 5) + '  ' + text,
                user: {
                  _id: uid,
                  name: nick_name,
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
  )
}

export default Index
