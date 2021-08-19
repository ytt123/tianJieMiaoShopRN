import { fromJS } from 'immutable'
import * as constants from './constants'
import defaultState from './defaultState'

const dState = fromJS(defaultState)
const reducer = (state = dState, action: any) => {
  switch (action.type) {
    case constants.CHANGE_ORDER_INIT:
      return state.set('orderInit', state.get('orderInit').merge(fromJS(action.Info)))
    case constants.RESET_ORDER_INIT:
      return state.set('orderInit', {})
    case constants.CHANGE_ADDRESS_INIT:
      return state.set('addressInfo', action.Info)
    case constants.RESET_ADDRESS_INIT:
      return state.set('addressInfo', {})
    //积分订单相关
    case constants.UPDATE_SCOREORDER_INIT:
      return state.set('scoreOrderInit', state.get('scoreOrderInit').merge(fromJS(action.Info)))
    case constants.RESET_SCOREORDER_INIT:
      return state.set('scoreOrderInit', fromJS({}))

    //服务订单相关
    case constants.UPDATE_SERVICEORDER_INIT:
      return state.set('serviceOrderInit', state.get('serviceOrderInit').merge(fromJS(action.Info)))
    case constants.RESET_SERVICEORDER_INIT:
      return state.set('serviceOrderInit', fromJS({}))

    //购物车订单相关
    case constants.UPDATE_CARORDER_INIT:
      return state.set('carOrderInit', state.get('carOrderInit').merge(fromJS(action.Info)))
    case constants.RESET_CARORDER_INIT:
      return state.set('carOrderInit', fromJS({}))

    //咨询单订单相关
    case constants.UPDATE_CONSULTATIONORDER_INIT:
      return state.set(
        'consultationOrderInit',
        state.get('consultationOrderInit').merge(fromJS(action.Info)),
      )
    case constants.RESET_CONSULTATIONORDER_INIT:
      return state.set('consultationOrderInit', fromJS({}))

    default:
      return state
  }
}

export default reducer
