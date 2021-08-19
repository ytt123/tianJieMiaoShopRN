import { ImagePickerResponse } from 'react-native-image-picker'
import { Platform } from 'react-native'
import RNFS from 'react-native-fs'
import { ajax, url } from '../api'
import { qiniuUploadHost } from '../config/host.config'
import { QiniuUploadRes } from '../types/common'
import { randomString } from './util'

/**
 * base64图片上传
 */
export const imageUpLoadBase64 = async (base64: string, name?: string) => {
  try {
    const response = await ajax({
      url: url.resourceUploadBase64,
      data: {
        source: 'AVATAR',
        base_str: base64,
        name: name || randomString(),
      },
    })
    return response?.data?.url
  } catch (error) {
    return Promise.reject(error)
  }
}

/**
 * 七牛文件上传
 */
export const qiniuFileUpload = async (res: ImagePickerResponse, shop_uuid: string) => {
  try {
    const qiniuToken = await ajax({
      url: url.qiniuTokenGet,
      data: {
        source: 'AVATAR',
        suffix: 'png',
        shop_uuid,
      },
    })

    if (Platform.OS === 'ios') {
      const formData = new FormData()
      formData.append('token', qiniuToken.data.token)
      formData.append('key', qiniuToken.data.key)
      formData.append('file', {
        uri: res.uri,
        fileName: res.fileName || randomString(),
      })

      const qiniuRes = await fetch(qiniuUploadHost, {
        body: formData,
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      if (qiniuRes.status === 200) {
        const resJSON: QiniuUploadRes = await qiniuRes.json()
        return Promise.resolve(resJSON?.data)
      } else {
        return Promise.reject(qiniuRes)
      }
    } else {
      const qiniuRes = await RNFS.uploadFiles({
        toUrl: qiniuUploadHost,
        files: [
          {
            name: 'file',
            filename: randomString(),
            filepath: res.path || '',
            filetype: '',
          },
        ],
        fields: qiniuToken.data,
        method: 'POST',
      }).promise

      const packageData: QiniuUploadRes = JSON.parse(qiniuRes.body)

      return Promise.resolve(packageData?.data)
    }
  } catch (error) {
    return Promise.reject()
  }
}
