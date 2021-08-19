import React from 'react'
import { View, Text } from 'react-native'
import { Touchable } from '../../../components'
import style from './style'
import { Modal } from '@ant-design/react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const arr = ['全部', '待同意', '待发货']
interface IndexProps {
  visible: boolean
  setVisible: any
  selectType: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, selectType } = props

  const { bottom } = useSafeAreaInsets()
  return (
    <View style={style.wrapper}>
      <Modal
        popup
        maskClosable
        visible={visible}
        animationType="slide-up"
        onClose={() => setVisible(false)}
      >
        <View style={{ paddingBottom: bottom }}>
          {arr.map((item, index) => {
            return (
              <Touchable
                key={index}
                style={style.item1}
                onPress={() => {
                  setVisible(false)
                  selectType(item)
                }}
              >
                <Text style={style.titleText1}>{item}</Text>
              </Touchable>
            )
          })}
        </View>
      </Modal>
    </View>
  )
}

export default Index
