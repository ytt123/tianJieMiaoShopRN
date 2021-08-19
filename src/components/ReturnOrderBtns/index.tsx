import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { Touchable } from '../../components'
import useIndex from './useIndex'
import { Toast } from '@ant-design/react-native'
interface IndexProps {
  data: any
  dataChange?: any
}

const Index: React.FC<IndexProps> = props => {
  const { data, dataChange } = props

  const { status_flag, return_order_no, return_goods_way } = data || {}
  const isgoods = return_goods_way === 'MONEY_AND_GOODS'
  let btns = <View />

  const { refund } = useIndex(return_order_no, dataChange)
  switch (status_flag) {
    case 'WAIT_REFUND':
      btns = (
        <View style={style.btnsWrap}>
          <View style={{ flex: 1 }} />
          <View style={style.btnsWrap}>
            <Touchable
              onPress={() => {
                refund('refund')
              }}
            >
              <Text style={style.btn1Text}>退款</Text>
            </Touchable>
          </View>
        </View>
      )

      break

    case 'WAIT_SHOP_CONFIRM_SIGN':
      btns = (
        <View style={style.btnsWrap}>
          <View style={{ flex: 1 }} />
          <Touchable
            onPress={() => {
              refund('receiving')
            }}
          >
            <Text style={style.btn1Text}>确认收货</Text>
          </Touchable>
          <Touchable
            onPress={() => {
              refund('refuseReceiving')
            }}
          >
            <Text style={style.btn2Text}>拒收</Text>
          </Touchable>
        </View>
      )
      break
    case 'WAIT_CHECK':
      btns = (
        <View style={style.btnsWrap}>
          <View style={{ flex: 1 }} />
          <Touchable
            onPress={() => {
              // isgoods ? refund('examineGooodsTrue') : refund('examineTrue')
              isgoods ? Toast.show('退货退款:请至后台操作') : refund('examineTrue')
            }}
          >
            <Text style={style.btn1Text}>同意</Text>
          </Touchable>
          <Touchable
            onPress={() => {
              isgoods ? refund('examineGooodsFalse') : refund('examineFalse')
            }}
          >
            <Text style={style.btn2Text}>拒绝</Text>
          </Touchable>
        </View>
      )
      break

    default:
      break
  }
  return <View style={style.wrapper}>{btns}</View>
}

export default Index
