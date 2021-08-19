import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import { ajax, url } from '../../api'
import useSpinner from '../../utils/hooks/useSpinner'
import alipay from '../../utils/extend/alipay'
import { Platform } from 'react-native'
import { Toast } from '@ant-design/react-native'
// import * as WeChat from 'react-native-wechat-lib'
const useIndex = () => {
  // @ts-ignore
  const { replace } = useNavigation()
  const { spinningChange } = useSpinner()

  /**
   * 支付跳转
   */
  const paySuccess = useCallback(
    order_no => {
      Toast.show('支付成功')
      setTimeout(() => {
        replace(mainScreenConfig.PayGoodsResult.name, { order_no })
      }, 500)
    },
    [replace],
  )

  const weixinPay = useCallback(
    order_no => {
      spinningChange(true)
      ajax({
        url: url.wechatPay,
        data: {
          order_no,
          pay_order_type: 'USER_SHOPPING',
          coordinate: '#Y-1-6#',
        },
      })
        .then(res => {
          spinningChange(false)
          const { data } = res

          // WeChat.pay({
          //   partnerId: data.mchId,
          //   prepayId: data.orderId,
          //   nonceStr: data.nonceStr,
          //   timeStamp: data.timeStamp,
          //   package: data.package,
          //   sign: data.sign,
          // })
          //   .then(res => {
          //     paySuccess(order_no)
          //   })
          //   .catch(err => {})
        })
        .catch(err => {
          spinningChange(false)
          const { data } = err
          const { msg } = data || {}
          Toast.show(msg)
        })
    },
    [paySuccess, spinningChange],
  )

  const aliPayF = useCallback(
    order_no => {
      spinningChange(true)
      ajax({
        url: url.payAli,
        data: { coordinate: '#Y-1-6#', pay_order_type: 'USER_SHOPPING', order_no },
      })
        .then(res => {
          spinningChange(false)
          const { data } = res
          alipay
            .pay(data)
            .then((data: any) => {
              let resultDic: any = {}
              if (Platform.OS === 'ios') {
                resultDic = data[0]
              } else {
                resultDic = data
              }
              if (resultDic.resultStatus === '9000') {
                paySuccess(order_no)
              }
            })
            .catch((err: any) => {})
        })
        .catch(err => {
          spinningChange(false)
          const { data } = err
          const { msg } = data || {}
          Toast.show(msg)
        })
    },
    [paySuccess, spinningChange],
  )

  return { aliPayF, weixinPay }
}

export default useIndex
