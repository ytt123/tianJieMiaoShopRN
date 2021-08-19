import { fromJS } from 'immutable'
import * as constants from './constants'
import defaultState from './defaultState'

const dState = fromJS(defaultState)
const reducer = (state = dState, action: any) => {
  switch (action.type) {
    // ------------ 登录信息 ------------
    case constants.CHANGE_USER_ONLINE:
      return state.set('userOnline', action.userOnline)
    case constants.CHANGE_USER_INFO:
      return state.set('userInfo', fromJS(action.userInfo))
    case constants.CHANGE_USER_INFO_ITEM:
      return state.set('userInfo', state.get('userInfo').merge(fromJS(action.params)))
    case constants.CHANGE_USER_IDCARD_INFO:
      return state.set('idcardInfo', fromJS(action.idcardInfo))
    // 设备
    case constants.IS_WX_INSTALLED_CHANGE:
      return state.set('isWXAppInstalled', action.isWXAppInstalled)
    case constants.SPINNING_CHANGE:
      return state.set('spinning', action.spinning)

    default:
      return state
  }
}

export default reducer
