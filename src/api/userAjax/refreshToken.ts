import { AxiosResponse } from 'axios'
import { packageAxiosRequestConfig } from './util'
import { getStorage, setStorage, StorageKey } from '../../utils/storage'
import axiosCreate from '../axiosFactory'
import url from './url'

let subscribers: any[] = []
let isRefreshToken = false

const addSubscriber = (subscriber: any) => {
  subscribers.push(subscriber)
}

const refreshToken = async () => {
  try {
    const tokenInfo = await getStorage(StorageKey.TOKEN_INFO)

    if (tokenInfo) {
      /**
       * 当有多个请求同时刷新 token 的时候，如果其中某个请求在刷新 token 之后到达服务端
       * 这个请求会报重新登录，因为之前请求带上的 token 已经被服务端删掉，该请求不会进入重新请求的队列
       * 暂时的解决方案是稍微延迟一点刷新token的时间，等待所有请求都进入重新请求的队列
       */
      setTimeout(async () => {
        const res = await axiosCreate().request({
          url: url.refreshToken,
          data: tokenInfo,
          method: 'post',
        })
        setStorage(StorageKey.TOKEN_INFO, res.data.data)
          .then(() => {
            isRefreshToken = false
            onAccessTokenFetched()
          })
          .catch(err => {})
      }, 100)
    }
  } catch (error) {
    return Promise.reject()
  }
}

const onAccessTokenFetched = () => {
  subscribers.forEach(callback => callback())
  subscribers = []
}

export default (response: AxiosResponse) => {
  return new Promise((resolve, reject) => {
    addSubscriber(async () => {
      await packageAxiosRequestConfig(response.config)
      axiosCreate()
        .request(response.config)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          console.log('------------- refresh token error -------------')
          reject(err)
        })
    })
    if (!isRefreshToken) {
      refreshToken()
      isRefreshToken = true
    }
  })
}
