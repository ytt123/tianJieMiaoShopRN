import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Iconfont, Touchable } from '../../../components'
import style from './style'
import { Modal } from '@ant-design/react-native'
import Slider from '@react-native-community/slider'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  visible: boolean
  setVisible: any
  beautyOptions: any
  setBeautyOptions: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, beautyOptions, setBeautyOptions } = props
  const [chooseIndex, setChooseIndex] = useState<number>(0)
  const { bottom } = useSafeAreaInsets()
  console.log('beautyOptionsbeautyOptionsbeautyOptions', beautyOptions)
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

          <View style={style.slide}>
            <Slider
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="rgba(121,188,242,1)"
              maximumTrackTintColor="rgba(239,238,240,1)"
              value={
                chooseIndex === 0 ? beautyOptions.smoothnessLevel : beautyOptions.lighteningLevel
              }
              onValueChange={e => {
                const level = Math.floor(e * 10) / 10

                if (chooseIndex === 0) {
                  setBeautyOptions((pre: any) => ({ ...pre, smoothnessLevel: level }))
                } else if (chooseIndex === 1) {
                  setBeautyOptions((pre: any) => ({ ...pre, lighteningLevel: level }))
                }
              }}
            />
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
