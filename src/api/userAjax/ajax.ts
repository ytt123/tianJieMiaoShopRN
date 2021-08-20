import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Toast } from '@ant-design/react-native'
import axiosFactory from '../axiosFactory'
import { AjaxRequestConfig } from '../ajax'
import refreshToken from './refreshToken'
import { packageAxiosRequestConfig } from './util'
// import { Loading } from '../../components/Loading'
import { DeviceEventEmitter } from 'react-native'
let needLoadingRequestCount = 0

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    // Loading.show()
  }
  needLoadingRequestCount++
}

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) {
    return
  }
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    // Loading.hide()
  }
}

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
      showFullScreenLoading()
      packageHeaders(config)

      console.log(
        '请求拦截-------------',
        JSON.stringify({ data: config.data, url: config.url }, null, 2),
      )
      return config
    },
    err => {
      tryHideFullScreenLoading()
      return Promise.reject(err)
    },
  )
}

const axios = axiosFactory()
injectRequestInterceptor(axios)
/**
 * 重新登录
 */
const dealRelogin = () => {
  console.log('重新登录')
  DeviceEventEmitter.emit('dealRelogin', { type: 'dealRelogin' })
}

export const ajaxExecute = async (
  axiosConfig: AxiosRequestConfig,
  ajaxConfig?: AjaxRequestConfig,
) => {
  try {
    const response = await axios.request(axiosConfig)

    tryHideFullScreenLoading()
    const { data = {} } = response
    let { code = 0, msg = '', refresh_token = 0, re_login = 0 } = data
    console.log('接口返回', data)
    if (re_login === 1) {
      Toast.show(`${msg}，请退出登录`)
      // 重新登录
      dealRelogin()
      return Promise.reject(response)
    } else if (refresh_token) {
      // 刷新 token
      const reTryData = await refreshToken(response)
      return reTryData
    } else if (code === 0) {
      if (ajaxConfig?.codeZeroCatch) {
        ajaxConfig.codeZeroCatch(data)
      } else {
        Toast.show(msg)
      }

      return Promise.reject(response)
    } else if (code === 1) {
      return data
    } else {
      Toast.show('服务器开小差了，请稍后再试')
      return Promise.reject(response)
    }
  } catch (error) {
    Toast.show('服务器开小差了，请稍后再试')
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
}

const ajax = async (config: AjaxRequestConfig) => {
  const { isShowLoading, codeZeroCatch, ...axiosRequestConfig } = config

  try {
    await packageAxiosRequestConfig(axiosRequestConfig)
    const ajaxResponse = await ajaxExecute(axiosRequestConfig, config)
    return ajaxResponse
  } catch (error) {
    return Promise.reject(error)
  }
}

export default ajax
