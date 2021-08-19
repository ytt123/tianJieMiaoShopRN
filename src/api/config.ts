import { env } from '../config/env'

let BASE_URL = ''
// 微信支付
let THIRD_PARTY_URL = ''
// 微信登录
let APP_APPLET_URL = ''

if (env === 'local') {
  BASE_URL = 'http://192.168.11.89:9001'
  THIRD_PARTY_URL = 'https://dev.app-third-party.pincll.net'
  APP_APPLET_URL = 'https://dev.app-applet.pincll.net'
} else if (env === 'development') {
  BASE_URL = 'https://api.ppzx168.com.cn'

  // BASE_URL = 'http://192.168.11.162:9009'
  THIRD_PARTY_URL = 'https://dev.app-third-party.pincll.net'
  APP_APPLET_URL = 'https://dev.app-applet.pincll.net'
} else if (env === 'production') {
  BASE_URL = 'https://api.pincll.com'
  THIRD_PARTY_URL = 'https://app-third-party.pincll.com'
  APP_APPLET_URL = 'https://app-applet.pincll.com'
}

const V1 = 'v1'
const USER = 'shop'
const COMMON = 'common'

export { BASE_URL, V1, USER, COMMON, THIRD_PARTY_URL, APP_APPLET_URL }
