import * as constants from './constants'

const changeOrderInit = (Info: any) => ({
  type: constants.CHANGE_ORDER_INIT,
  Info,
})
const resetOrderInit = () => ({
  type: constants.RESET_ORDER_INIT,
})

const changeAddressInfo = (Info: any) => ({
  type: constants.CHANGE_ADDRESS_INIT,
  Info,
})
const resetAddressInfo = () => ({
  type: constants.RESET_ADDRESS_INIT,
})

//积分相关
const updateScoreOrderInfo = (Info: any) => ({
  type: constants.UPDATE_SCOREORDER_INIT,
  Info,
})

const resetScoreOrderInfo = () => ({
  type: constants.RESET_SCOREORDER_INIT,
})
//服务相关
const updateServiceOrderInfo = (Info: any) => ({
  type: constants.UPDATE_SERVICEORDER_INIT,
  Info,
})

const resetServiceOrderInfo = () => ({
  type: constants.RESET_SERVICEORDER_INIT,
})
//购物车相关
const updateCarOrderInfo = (Info: any) => ({
  type: constants.UPDATE_CARORDER_INIT,
  Info,
})

const resetCarOrderInfo = () => ({
  type: constants.RESET_CARORDER_INIT,
})

//咨询相关
const updateConsultationOrderInfo = (Info: any) => ({
  type: constants.UPDATE_CONSULTATIONORDER_INIT,
  Info,
})

const resetConsultationOrderInfo = () => ({
  type: constants.RESET_CONSULTATIONORDER_INIT,
})

export default {
  changeOrderInit,
  resetOrderInit,
  changeAddressInfo,
  resetAddressInfo,
  //积分相关
  updateScoreOrderInfo,
  resetScoreOrderInfo,
  //服务相关
  updateServiceOrderInfo,
  resetServiceOrderInfo,
  //购物车相关
  updateCarOrderInfo,
  resetCarOrderInfo,
  //咨询相关
  updateConsultationOrderInfo,
  resetConsultationOrderInfo,
}
