import { env } from '../config/env'

let BASE_URL = ''
// 微信支付
let THIRD_PARTY_URL = ''
// 微信登录
let APP_APPLET_URL = ''

if (env === 'local') {
  BASE_URL = 'http://192.168.2.203:30008'
} else if (env === 'development') {
  BASE_URL = 'https://api.ppzx168.com.cn'
} else if (env === 'production') {
  BASE_URL = 'https://api.ppzx168.com.cn'
}

const V1 = 'v1'
const USER = 'shop'
const COMMON = 'common'

export { BASE_URL, V1, USER, COMMON, THIRD_PARTY_URL, APP_APPLET_URL }
