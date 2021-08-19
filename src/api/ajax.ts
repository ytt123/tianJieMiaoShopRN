import NetInfo from '@react-native-community/netinfo'
import { AxiosRequestConfig } from 'axios'
import { Toast } from '@ant-design/react-native'

import { ajax as userAjax, url as userUrl } from './userAjax'
import { ajax as commonAjax, url as commonUrl } from './commonAjax'

const userUrlKeys = Object.keys(userUrl)
const commonUrlKeys = Object.keys(commonUrl)

interface AjaxResponse {
  code: number
  data?: any
  msg: string
  [propsName: string]: any
}

export interface AjaxRequestConfig extends AxiosRequestConfig {
  isShowLoading?: boolean
  codeZeroCatch?: (ajaxResponse: AjaxResponse) => void
}

const ajax = async (ajaxRequestConfig: AjaxRequestConfig) => {
  // 给默认值
  const {
    isShowLoading = false,
    url,
    method = 'post',
    data = {},
    ...restAxiosRequestConfig
  } = ajaxRequestConfig

  try {
    const state = await NetInfo.fetch()
    if (state.isConnected) {
      if (!url) {
        // console.warn('未知 url')
        return Promise.reject()
      }
      const config = packageConfig({
        isShowLoading,
        url,
        method,
        data,
        ...restAxiosRequestConfig,
      })
      if (userUrlKeys.some(key => userUrl[key] === url)) {
        return userAjax(config)
      } else if (commonUrlKeys.some(key => commonUrl[key] === url)) {
        return commonAjax(config)
      } else {
        return Promise.reject()
      }
    } else {
      return Promise.reject()
    }
  } catch (err) {
    Toast.show('网络连接错误，请检查您的网络状态')
    return Promise.reject()
  }
}

export default ajax

const packageConfig = (config: AjaxRequestConfig) => {
  const { url } = config
  if (url && Object.keys(urlConfigMap).indexOf(url) !== -1) {
    return {
      ...config,
      ...urlConfigMap[url],
    }
  } else {
    return config
  }
}

const urlConfigMap: any = {
  [userUrl.resourceUpload]: { timeout: 0 },
}
