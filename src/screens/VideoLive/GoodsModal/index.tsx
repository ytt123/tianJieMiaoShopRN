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
  setInfo: any
  info: any
  allInfo: any
  live_log_uuid: string
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, setInfo, info, allInfo, live_log_uuid } = props
  const [map, setMap] = useState({})
  const { bottom } = useSafeAreaInsets()
  const { update } = useIndex(allInfo, info, live_log_uuid)
  // console.log('222--------', JSON.stringify(allInfo, null, 2), info)

  return (
    <View style={style.wrapper}>
      <Modal
        popup
        maskClosable
        visible={visible}
        animationType="slide-up"
        onClose={() => {
          setMap({ name: '' })
          setVisible(false)
        }}
      >
        <View style={{ paddingBottom: bottom }}>
          <View style={style.topWrap}>
            <View style={style.topTitleWrap}>
              <View style={style.topCancelIcon} />
              <Text style={style.titleText}>购物袋</Text>
              <Touchable
                onPress={() => {
                  setMap({ name: '' })
                  setVisible(false)
                }}
              >
                <Iconfont iconfont={'\ue65a'} style={style.topCancelIcon} />
              </Touchable>
            </View>
            <Head map={map} setMap={setMap} />
          </View>

          <List map={map} info={info} setInfo={setInfo} visible={visible} setVisible={setVisible} />
          {/* <Touchable
            style={style.bom}
            onPress={() => {
              update()
              setVisible(false)
              //更新
            }}
          >
            <Text style={style.btnText}>选好了</Text>
          </Touchable> */}
        </View>
      </Modal>
    </View>
  )
}

export default Index
