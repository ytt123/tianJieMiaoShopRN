import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import style from './style'
import { Modal } from '@ant-design/react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Slider from '@react-native-community/slider'

const ItemView = (props: any) => {
  const { title, BeautyOptions, setBeautyOptions, type } = props

  const [step, setStep] = useState(BeautyOptions)

  // enum LighteningContrastLevel {
  //   Low = 0,
  //   Normal = 1,
  //   High,
  // }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ width: 60 }}>
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="rgba(121,188,242,1)"
          maximumTrackTintColor="rgba(239,238,240,1)"
          value={type === 3 ? BeautyOptions / 2 : BeautyOptions}
          onValueChange={e => {
            const level = Math.floor(e * 10) / 10

            if (type === 1) {
              setStep(level)
              setBeautyOptions((pre: any) => ({ ...pre, smoothnessLevel: level }))
            } else if (type === 2) {
              setStep(level)
              setBeautyOptions((pre: any) => ({ ...pre, lighteningLevel: level }))
            } else if (type === 3) {
              const newlevel = Number(level.toString()) * 2
              if (newlevel < 2 / 3) {
                setStep(0)
                setBeautyOptions((pre: any) => ({
                  ...pre,
                  lighteningContrastLevel: 0,
                }))
              } else if (newlevel > 2 / 3 && newlevel < 4 / 3) {
                setStep(1)
                setBeautyOptions((pre: any) => ({
                  ...pre,
                  lighteningContrastLevel: 1,
                }))
              } else {
                setStep(2)
                setBeautyOptions((pre: any) => ({
                  ...pre,
                  lighteningContrastLevel: 2,
                }))
              }
            } else if (type === 4) {
              setStep(level)
              setBeautyOptions((pre: any) => ({ ...pre, rednessLevel: level }))
            }
          }}
        />
      </View>

      <View style={{ width: 50 }}>
        <Text style={{ textAlign: 'center' }}>{step}</Text>
      </View>
    </View>
  )
}

interface IndexProps {
  visible: boolean
  setVisible: any
  BeautyOptions: any
  setBeautyOptions: any
  isOpenBeauty: any
  setIsOpenBeauty: any
}
const Index: React.FC<IndexProps> = props => {
  const {
    visible,
    setVisible,
    BeautyOptions,
    setBeautyOptions,
    isOpenBeauty,
    setIsOpenBeauty,
  } = props
  const { bottom } = useSafeAreaInsets()
  // const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => {
    setIsOpenBeauty(previousState => !previousState)
  }
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
      >
        <View style={{ paddingBottom: bottom }}>
          <View style={style.topWrap}>
            <View style={style.topTitleWrap}>
              <View style={style.topCancelIcon} />
              <Text style={style.titleText}>美颜</Text>
              <Switch
                trackColor={{ false: 'rgba(239,238,240,1)', true: '#81b0ff' }}
                thumbColor={isOpenBeauty ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#e6e5e7"
                onValueChange={toggleSwitch}
                value={isOpenBeauty}
              />
            </View>
          </View>

          <ItemView
            title={'磨皮'}
            type={1}
            setBeautyOptions={isOpenBeauty ? setBeautyOptions : () => {}}
            BeautyOptions={BeautyOptions.smoothnessLevel}
          />
          <ItemView
            title={'美白'}
            type={2}
            setBeautyOptions={isOpenBeauty ? setBeautyOptions : () => {}}
            BeautyOptions={BeautyOptions.lighteningLevel}
          />

          {/* <ItemView
            title={'对比度'}
            type={3}
            setBeautyOptions={setBeautyOptions}
            BeautyOptions={BeautyOptions.lighteningContrastLevel}
          />
          <ItemView
            title={'瘦脸'}
            type={4}
            setBeautyOptions={setBeautyOptions}
            BeautyOptions={BeautyOptions.rednessLevel}
          /> */}
        </View>
      </Modal>
    </View>
  )
}

export default Index
