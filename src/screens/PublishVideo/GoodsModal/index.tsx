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
  setInfo: any
  info: any
}
const Index: React.FC<IndexProps> = props => {
  const { visible, setVisible, setInfo, info } = props
  const [map, setMap] = useState({ name: '', status: 1 })
  const { bottom } = useSafeAreaInsets()
  const [copyinfo, setCopyInfo] = useState<any[]>(info)
  return (
    <View style={style.wrapper}>
      <Modal
        popup
        maskClosable
        visible={visible}
        animationType="slide-up"
        onClose={() => {
          setMap({ name: '', status: 1 })
          setVisible(false)
        }}
      >
        <View style={{ paddingBottom: bottom }}>
          <View style={style.topWrap}>
            <View style={style.topTitleWrap}>
              <View style={style.topCancelIcon} />
              <Text style={style.titleText}>选择带货商品</Text>
              <Touchable
                onPress={() => {
                  setMap({ name: '', status: 1 })
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
              setVisible(false)
              setInfo(copyinfo)
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
