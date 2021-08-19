import { ajax, url } from '../../api'
import { delay } from '../util'

/**
 * 检查是否支付完成
 * @param order_no
 */
export const orderCheckPayStatus = async (order_no: string, count: number = 0): Promise<void> => {
  try {
    const res = await ajax({
      url: url.orderCheckPayStatus,
      data: {
        out_trade_no: order_no,
      },
    })

    const { data } = res
    const { is_pay } = data
    if (is_pay === 1) {
      return Promise.resolve()
    } else {
      if (count <= 10) {
        await delay(1000)
        return orderCheckPayStatus(order_no, count + 1)
      } else {
        return Promise.reject()
      }
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
