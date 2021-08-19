import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { Modal, Popover } from '@ant-design/react-native'
import { Touchable } from '../../components'

interface IndexProps {
  type?: string
  visible: any
  setVisible: any
  data: any
  dataChange?: any
  payClick: any
  cancelClick: any
  commentClick: any
  logisticsDetail: any
  receiptClick: any
  remindDeliver: any
  refundClick?: any
}

const Index: React.FC<IndexProps> = props => {
  const {
    type,
    visible,
    setVisible,
    data,
    dataChange,
    payClick,
    cancelClick,
    commentClick,
    logisticsDetail,
    receiptClick,
    remindDeliver,
    refundClick,
  } = props

  const { status_flag, order_no } = data || {}
  let btns = <View />
  let modals = <View />

  const idshow = type === 'detail'
  switch (status_flag) {
    case 'WAIT_PAY':
      btns = (
        <View style={style.btnsWrap}>
          {idshow && (
            <Popover
              onSelect={v => {
                cancelClick(order_no)
              }}
              overlay={[
                <Popover.Item value={'test1'}>
                  <Text style={style.popText}>取消订单</Text>
                </Popover.Item>,
              ]}
            >
              <Text style={style.btnXText}>● ● ●</Text>
            </Popover>
          )}
          <View style={{ flex: 1 }} />
          <View style={style.btnsWrap}>
            <Touchable
              onPress={() => {
                // cancelClick(order_no, dataChange)
              }}
            >
              <Text style={style.btn1Text}>联系卖家</Text>
            </Touchable>
            <Touchable
              onPress={() => {
                payClick(order_no)
              }}
            >
              <Text style={style.btn2Text}>立即支付</Text>
            </Touchable>
          </View>
        </View>
      )

      break

    case 'WAIT_DELIVER_GOODS':
      btns = (
        <View style={style.btnsWrap}>
          {idshow && (
            <Popover
              onSelect={v => {
                refundClick()
              }}
              overlay={[
                <Popover.Item value={'test1'}>
                  <Text style={style.popText}>退款</Text>
                </Popover.Item>,
              ]}
            >
              <Text style={style.btnXText}>● ● ●</Text>
            </Popover>
          )}
          <View style={{ flex: 1 }} />

          <Touchable
            onPress={() => {
              // cancelClick(order_no, dataChange)
            }}
          >
            <Text style={style.btn1Text}>联系卖家</Text>
          </Touchable>
          <Touchable
            onPress={() => {
              remindDeliver(order_no)
            }}
          >
            <Text style={style.btn2Text}>提醒发货</Text>
          </Touchable>
        </View>
      )
      break
    case 'WAIT_RECEIVE_GOODS':
      btns = (
        <View style={style.btnsWrap}>
          {idshow && (
            <Popover
              onSelect={v => {
                if (v === 'test1') {
                  refundClick()
                } else if (v === 'test2') {
                }
              }}
              overlay={[
                <Popover.Item value={'test1'}>
                  <Text style={style.popText}>退款</Text>
                </Popover.Item>,
                <Popover.Item value={'test2'}>
                  <Text style={style.popText}>延长收货</Text>
                </Popover.Item>,
              ]}
            >
              <Text style={style.btnXText}>● ● ●</Text>
            </Popover>
          )}
          <View style={{ flex: 1 }} />
          <Touchable
            onPress={() => {
              logisticsDetail()
            }}
          >
            <Text style={style.btn1Text}>查看物流</Text>
          </Touchable>
          <Touchable
            onPress={() => {
              receiptClick(order_no)
            }}
          >
            <Text style={style.btn2Text}>确认收货</Text>
          </Touchable>
        </View>
      )
      break
    case 'WAIT_COMMENT':
      btns = (
        <View style={style.btnsWrap}>
          <Touchable
            onPress={() => {
              logisticsDetail()
            }}
          >
            <Text style={style.btn1Text}>查看物流</Text>
          </Touchable>
          <Touchable
            onPress={() => {
              commentClick()
            }}
          >
            <Text style={style.btn2Text}>评价</Text>
          </Touchable>
        </View>
      )
      break

    default:
      break
  }
  return (
    <View style={style.wrapper}>
      {btns}
      <Modal
        popup
        maskClosable
        visible={visible}
        animationType="slide-up"
        onClose={() => setVisible(false)}
      >
        {modals}
      </Modal>
    </View>
  )
}

export default Index
