/**
 * 七牛上传返回
 */
export type QiniuUploadRes = {
  code: number
  data: {
    url: string
    persistentId?: string
    size: string
  }
  msg: string
}
