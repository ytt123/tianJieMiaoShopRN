import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Iconfont, Touchable } from '../../../components'
import style from './style'
import { Modal } from '@ant-design/react-native'
import Head from './Head'
import List from './List'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useIndex from './useIndex'
interface IndexProps {
  visible: boolean
  setVisible: any
  info: any
  type?: string
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, info, type = '购物袋' } = props

  const [map, setMap] = useState<any>({ uuid: info, name: '' })
  const { bottom } = useSafeAreaInsets()
  const [copyinfo, setCopyInfo] = useState<any[]>([])
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
              <Text style={style.titleText}>{type}</Text>
              <Touchable
                onPress={() => {
                  setVisible(false)
                }}
              >
                <Iconfont iconfont={'\ue65a'} style={style.topCancelIcon} />
              </Touchable>
            </View>
            <Head map={map} setMap={setMap} />
          </View>

          <List
            map={map}
            info={copyinfo}
            setInfo={setCopyInfo}
            visible={visible}
            setVisible={setVisible}
          />
          <Touchable
            style={style.bom}
            onPress={() => {
              // setVisible(false)
              // setInfo(copyinfo)
              console.log(copyinfo)
            }}
          >
            <Text style={style.btnText}>选好了</Text>
          </Touchable>
        </View>
      </Modal>
    </View>
  )
}

export default Index
