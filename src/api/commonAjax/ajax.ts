import { Alert } from 'react-native'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import axiosFactory from '../axiosFactory'
import { AjaxRequestConfig } from '../ajax'

/**
 * 包装请求头信息
 */
const packageHeaders = (config: AxiosRequestConfig) => {}

/**
 * 请求拦截
 */
const injectRequestInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    config => {
      packageHeaders(config)

      // console.log('请求拦截', config)
      return config
    },
    err => {
      return Promise.reject(err)
    },
  )
}

const axios = axiosFactory()
injectRequestInterceptor(axios)

const ajax = async (config: AjaxRequestConfig) => {
  const { url, method, data, codeZeroCatch } = config

  try {
    let res: any = await axios.request({ url, method, data })
    const { status, data: resData } = res
    if (status === 200) {
      let { code = 0, msg = '' } = resData
      if (code === 1) {
        return resData
      } else if (code === 0) {
        if (codeZeroCatch) {
          codeZeroCatch(resData)
        } else {
          Alert.alert(msg)
        }
        return Promise.reject(res)
      } else {
        return Promise.reject(res)
      }
    } else {
      return Promise.reject(res)
    }
  } catch (err) {
    return Promise.reject(err)
  }
}

export default ajax
