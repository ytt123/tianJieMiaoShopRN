import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Iconfont, Touchable, ImageChoose } from '../../../components'
import style from './style'
import { Modal } from '@ant-design/react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useIndex from './useIndex'
interface IndexProps {
  visible: boolean
  setVisible: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible } = props

  const { bottom } = useSafeAreaInsets()

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
          // backgroundColor: 'red',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <View style={{ paddingBottom: bottom, marginHorizontal: 16 }}>
          <Text style={style.titleText}>举报原因填写</Text>

          <ImageChoose />
          <Touchable
            style={style.bom}
            onPress={() => {
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
