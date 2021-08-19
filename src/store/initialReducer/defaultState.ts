import { getFontScaleSync } from 'react-native-device-info'

const defaultState = {
  // ------------ 登录信息 ------------
  userOnline: false,
  userInfo: {},
  idcardInfo: {},
  // ------------ 设备信息 ------------
  fontScale: getFontScaleSync(),
  isWXAppInstalled: false,
  spinning: false,
}

export default defaultState
