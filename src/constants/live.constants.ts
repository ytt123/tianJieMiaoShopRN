// 0:待审核  1：商家审核  2平台审核  9:审核未通过'
export enum LiveReviewStatus {
  WAITREVIEW = 0,
  SHOPREVIEW = 1,
  PLATFORMREVIEW = 2,
  REFUSEREVIEW = 9,
}

export enum ShopUserType {
  SHOP = 'SHOP',
  AGENT_ADMIN = 'AGENT_ADMIN',
}
