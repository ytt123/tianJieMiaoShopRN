import { StringObj } from '../types/global'

export const orderTypeValue: StringObj = {
  WAIT_PAY: '待付款',
  WAIT_CONSUME: '待核销',
  WAIT_COMMENT: '待评价',
  TRADE_SUCCESS: '交易成功',
  TRADE_CLOSE: '交易关闭',
  REFUND_SUCCESS: '退款成功',
}
export enum OrderFlowTypeValue {
  ORDER_FLOW_PHYSICAL = 'ORDER_FLOW_PHYSICAL',
}
export const kdnExpressCompanyByPerson: StringObj = {
  HTKY: '百世汇通',
  EMS: 'EMS',
  STO: '申通',
  SF: '顺丰',
  HHTT: '天天快递',
  YTO: '圆通',
  YD: '韵达',
  ZTO: '中通',
  YZPY: '邮政包裹',
  ZJS: '宅急送',
  JD: '京东',
  DBL: '德邦快递',
  UC: '优速快递',
  TNT: 'TNT快递',
}
// delivery_order_range
// 1未配送2待派单3已派单待取货4已取货配送中5已送达
// second_pay_status
// 1未补差价2不需补差价3已退还4已支付5待退款6待确认支付
