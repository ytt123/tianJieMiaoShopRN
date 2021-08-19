import AsyncStorage from '@react-native-community/async-storage'

/**
 * StorageKey
 */
export enum StorageKey {
  // 用户相关
  USER_INFO = 'user_info',
  TOKEN_INFO = 'token_info',
  USER_ONLINE = 'user_online',
  // 模拟随机码
  SIM_MACHINE_CODE = 'sim_machine_code',
  FIRST_LOGIN = 'first_login',
  INSURANCEINFO = 'InsuranceInfo',
  KEFUPERSON = 'keFuPerson',
  // 区域信息
  REGION = 'region',
  ORDER_INIT = 'order_init', // 创建订单
}

/**
 * 存储本地数据,支持对象存储
 */
export const setStorage = (key: StorageKey, value: any) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
    value = 'obj-' + value
  } else {
    value = 'str-' + value
  }
  return AsyncStorage.setItem(key, value)
}

/**
 * 取本地数据,支持对象存储
 */
export const getStorage = async (key: StorageKey) => {
  try {
    let v = await AsyncStorage.getItem(key)
    if (v) {
      if (v.indexOf('obj-') === 0) {
        v = v.slice(4)
        return JSON.parse(v)
      } else if (v.indexOf('str-') === 0) {
        return v.slice(4)
      }
    } else {
      return null
    }
  } catch (error) {}
}

/**
 * 移除 key 对应的数据
 */
export const rmStorage = (key: StorageKey) => {
  return AsyncStorage.removeItem(key)
}

/**
 *
 * @param {Storage} storage // localStorage 默认 || sessionStorage
 */
export const clearStorage = () => {
  return AsyncStorage.clear()
}
