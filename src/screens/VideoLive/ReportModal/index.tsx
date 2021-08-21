import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Iconfont, Touchable, ImageChoose } from '../../../components'
import style from './style'
import { Modal } from '@ant-design/react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useIndex from './useIndex'
interface IndexProps {
  visible: boolean
  setVisible: any
  info: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, info } = props

  const { bottom } = useSafeAreaInsets()
  const { sumbit, desc, setDesc, setImgs } = useIndex(info)
  return (
    <View style={style.wrapper}>
      <Modal
        popup
        maskClosable
        visible={visible}
        animationType="slide-up"
        onClose={() => {
          setVisible(false)
        }}
        style={{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <View style={{ paddingBottom: bottom, marginHorizontal: 16, paddingTop: 36 }}>
          <Text style={style.titleText}>举报原因填写</Text>

          <View style={style.inputWrap}>
            <TextInput
              underlineColorAndroid="transparent"
              style={style.input}
              placeholder="请输入您想举报的内容"
              multiline
              maxLength={200}
              textAlignVertical="top"
              value={desc}
              onChangeText={text => {
                setDesc(text.trim())
              }}
              placeholderTextColor={'#999'}
            />
          </View>
          <ImageChoose setImgs={setImgs} />
          <Touchable
            style={style.bom}
            onPress={() => {
              sumbit()
              setVisible(false)
            }}
          >
            <Text style={style.btnText}>提交</Text>
          </Touchable>
        </View>
      </Modal>
    </View>
  )
}

export default Index
