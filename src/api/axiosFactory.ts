import axios, { AxiosRequestConfig } from 'axios'
import { getUniqueId } from 'react-native-device-info'

// 全局默认配置
axios.defaults.timeout = 120000
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common['Client-Type'] = 'app'
axios.defaults.headers.common['Request-Source'] = 'shop'
// axios.defaults.headers.common['Machine-Code'] = getUniqueId()

const axiosCreate = (config?: AxiosRequestConfig) => {
  return axios.create(config)
}

export default axiosCreate
