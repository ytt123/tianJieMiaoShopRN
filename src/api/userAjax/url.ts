import { BASE_URL, V1, USER, COMMON } from '../config'

const PREFIX_URL = `${BASE_URL}/${V1}/${USER}`

const url: {
  [propName: string]: string
} = {
  // ------------ token 刷新  ------------
  refreshToken: `${BASE_URL}/${V1}/${COMMON}/helpers/refresh_token`,

  // ------------ 文件上传 ------------
  resourceUpload: `${PREFIX_URL}/user_resources/upload_file`,
  resourceUploadBase64: `${PREFIX_URL}/user_resources/upload_base64`,

  //-----------天街喵   ------------
  // login
  login: `${PREFIX_URL}/accounts/login`,
  // data Analysis
  dataCenterHome: `${PREFIX_URL}/data_center/home`,
  payGoodsList: `${PREFIX_URL}/data_center/pay_goods_list`,
  payGoodsSpecList: `${PREFIX_URL}/data_center/pay_goods_spec_list`,
  collectionList: `${PREFIX_URL}/data_center/collection_goods_list`,
  rulesRead: `${PREFIX_URL}/rules/read`,
  // Order management
  ordersList: `${PREFIX_URL}/orders/list`,
  returnOrdersList: `${PREFIX_URL}/return_orders/list`,
  ordersDeliveryOff: `${PREFIX_URL}/orders/delivery_off`,
  returnOrdersOperate: `${PREFIX_URL}/return_orders/operate`, //退款。。。
  ordersOperate: `${PREFIX_URL}/orders/operate`, //
  // shop Info
  dataCentershopCount: `${PREFIX_URL}/data_center/shop_count`,
  commissionLogsCount: `${PREFIX_URL}/commission_logs/count`,
  userRead: `${PREFIX_URL}/users/read`,
  bankCardsEdit: `${PREFIX_URL}/shop_bank_cards/edit`,
  bankCardsgetDefault: `${PREFIX_URL}/shop_bank_cards/get_default`,
  agentBankCardsEdit: `${PREFIX_URL}/agent_bank_cards/edit`,
  agentBankCardsgetDefault: `${PREFIX_URL}/agent_bank_cards/get_default`,
  drawcashsCreate: `${PREFIX_URL}/shop_drawcashs/create`,
  agentDrawcashsCreate: `${PREFIX_URL}/agent_drawcashs/create`,
  assetLogsList: `${PREFIX_URL}/asset_logs/list`,
  loginLogsList: `${PREFIX_URL}/login_logs/list`,
  userUpdate: `${PREFIX_URL}/users/update`,
  shopsUpdate: `${PREFIX_URL}/shops/update`,
  shopsRead: `${PREFIX_URL}/shops/read`,
  mobileUpdate: `${PREFIX_URL}/accounts/update_mobile`, // 更换手机号码
  accountsCheckMobileCode: `${PREFIX_URL}/accounts/check_mobile_code`, //更换密码前校验
  loginPasswordUpdate: `${PREFIX_URL}/accounts/update_login_password`, // 更换登录密码
  accountsisSetLogin: `${PREFIX_URL}/accounts/is_set_login_password`, //
  // add
  goodsGetBuyGoods: `${PREFIX_URL}/goods/list`, //列表
  shopLiveLogsStart: `${PREFIX_URL}/shop_live_logs/start`, //开启直播
  shopLiveLogsUpdate: `${PREFIX_URL}/shop_live_logs/update`, //更新商品列表
  shopLiveLogsEnd: `${PREFIX_URL}/shop_live_logs/end`, //关闭直播

  // add
  agentLiveApplysCreate: `${PREFIX_URL}/agent_live_applys/create`, //申请直播
}

export default url
