import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Iconfont, Touchable } from '../../../components'
import style from './style'
import { Modal } from '@ant-design/react-native'
import Head from './Head'
import List from './List'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  visible: boolean
  setVisible: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible } = props
  const [chooseIndex, setChooseIndex] = useState<number>(0)
  const { bottom } = useSafeAreaInsets()

  return (
    <View style={style.wrapper}>
      <Modal
        popup
        // maskClosable
        visible={visible}
        // transparent
        animationType="slide-up"
        onClose={() => {
          setVisible(false)
        }}
        closable={true}
      >
        <View style={{ paddingBottom: bottom }}>
          <View style={style.top}>
            <Text style={style.toptext}>美颜</Text>
            <Iconfont iconfont={'\ue624'} onPress={() => setVisible(false)} />
          </View>

          <View style={style.rows}>
            <Touchable
              style={style.rowsitem}
              onPress={() => {
                setChooseIndex(0)
              }}
            >
              <Iconfont
                iconfont={'\ue630'}
                style={chooseIndex === 0 ? style.seleicon : style.icon}
              />
              <Text style={style.itemtext}>磨皮</Text>
            </Touchable>
            <View style={{ width: 71 }} />
            <Touchable
              style={style.rowsitem}
              onPress={() => {
                setChooseIndex(1)
              }}
            >
              <Iconfont
                iconfont={'\ue8bf'}
                style={chooseIndex === 1 ? style.seleicon : style.icon}
              />
              <Text style={style.itemtext}>亮度</Text>
            </Touchable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Index
