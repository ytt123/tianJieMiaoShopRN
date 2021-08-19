import { BASE_URL, V1, COMMON } from '../config'

const PREFIX_URL = `${BASE_URL}/${V1}/${COMMON}`

const url: {
  [propName: string]: string
} = {
  // ------------ 发送验证码  ------------
  codeSendWithMobile: `${PREFIX_URL}/helpers/send_sms_code`,
  // ------------ 行政区获取  ------------
  regionGet: `${PREFIX_URL}/helpers/regions`,
  // ------------ 编码解码  ------------
  encodeObj: `${PREFIX_URL}/param_maps/code`,
  decodeObj: `${PREFIX_URL}/param_maps/decode`,
  // ------------ 小程序码  ------------
  commonAppletQrcodeGet: `${PREFIX_URL}/applets/get_qrcode`,
  // ------------ 快递查询  ------------
  expressQueryByKdn: `${PREFIX_URL}/helpers/query_express`,
  // ------------ 生成短链接  ------------
  shortUrlGet: `${PREFIX_URL}/helpers/create_short_url`,
  qiniuTokenGet: `${PREFIX_URL}/qiniu/get_upload_token`,
  queryExpress: `${PREFIX_URL}/helpers/query_express`,
}

export default url
