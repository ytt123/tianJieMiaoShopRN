import { ajax, url } from '../api'
import { getStorage, setStorage, StorageKey } from './storage'

//获取字符长度
export function strlen(str: string) {
  var len = 0
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    //单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      len++
    } else {
      len += 2
    }
  }
  return len
}

interface VideoVframeProps {
  format?: string
  offset?: number
  w?: number
}
/**
 * 视频缩略图
 */
export const videoVframe = (props: VideoVframeProps) => {
  const { format = 'png', offset = 0, w } = props

  let str = `?vframe/${format}/offset/${offset}`
  if (w) {
    str += `/w/${w}`
  }
  return str
}

/**
 * 地区信息格式化
 * @param {array} region
 */
function regionFormatter(region: any[] = []) {
  return region.map(province => ({
    value: province.id,
    label: province.name,
    children: province.citys.map((city: any) => ({
      value: city.id,
      label: city.name,
      children: city.areas.map((area: any) => ({
        value: area.id,
        label: area.name,
        children: [],
      })),
    })),
  }))
}

/**
 * 随机字符串
 */
export function randomString() {
  let d = new Date().getTime()
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // eslint-disable-next-line no-bitwise
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    // eslint-disable-next-line no-bitwise
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

/**
 * 时间格式化 yyyy-MM-dd hh:mm:ss
 * @param {Date} date
 * @param {string} fmt
 */
export const dateFormatter = (date: Date, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string => {
  let o: {
    [propName: string]: any
  } = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      )
    }
  }
  return fmt
}

/**
 * 时间戳转换
 * @param timeStamp
 */
export const timsStampFormat = (timeStamp: number) => {
  timeStamp /= 1000
  let hour = Math.floor(timeStamp / 3600)
  let min = Math.floor((timeStamp - hour * 3600) / 60)
  let sec = Math.floor(timeStamp % 60)

  return {
    hour: `0${hour}`.slice(-2),
    min: `0${min}`.slice(-2),
    sec: `0${sec}`.slice(-2),
  }
}

//日期字符串转成时间戳
//例如var date = '2015-03-05 17:59:00.0';
export const dateStrChangeTimeTamp = (dateStr: string) => {
  dateStr = dateStr.substring(0, 19)
  dateStr = dateStr.replace(/-/g, '/')
  var timeTamp = new Date(dateStr).getTime()
  return timeTamp
}

//日期字符串转成Date
//例如var date = '2015-03-05 17:59:00.0';
export const dateStrChangeDate = (dateStr: string) => {
  dateStr = dateStr.substring(0, 19)
  dateStr = dateStr.replace(/-/g, '/')
  var timeTamp = new Date(dateStr)
  return timeTamp
}

/**
 * 数组去重
 * @param {array} arr
 */
export function arrayToUnique(arr: any[] = [], label: string = 'id') {
  let ids: any[] = []
  let result: any[] = []
  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i]
    if (!ids.indexOf(item[label] !== -1)) {
      ids.push(item[label])
      result.push(item)
    }
  }
  return result.reverse()
}

/**
 * 获取当前周
 * @param
 */
export function currentWeek() {
  let now = new Date() //当前日期
  let nowDayOfWeek = now.getDay() //今天本周的第几天
  let nowDay = now.getDate() //当前日
  let nowMonth = now.getMonth() //当前月
  let nowYear = now.getFullYear() //当前年
  // nowYear += nowYear < 2000 ? 1900 : 0 //
  let aweek = []
  let aweek1 = []
  for (let i = 0; i < 8; i++) {
    let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + i)
    const t = dateFormatter(weekStartDate, 'dd')

    const t1 = dateFormatter(weekStartDate, 'yyyy-MM-dd')

    aweek.push(t)
    aweek1.push(t1)
  }

  return { day: aweek, date: aweek1 }
}

/**
 * 深拷贝
 * @param {object} obj
 */
export const deepCopy = (obj: any) => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 函数节流
 */
export const throttle = (fn: Function, gapTime: number = 1000) => {
  let last: number
  let timtout: number

  return () => {
    let now = +Date.now()
    if (last && now < last + gapTime) {
      clearTimeout(timtout)
      timtout = setTimeout(() => {
        last = now
        fn()
      }, gapTime)
    } else {
      last = now
      fn()
    }
  }
}

/**
 * 获取导航链接
 * @param {string} lng
 * @param {string} lat
 * @param {string} address
 */
export function getNavigationUri(lng: number, lat: number, address: string) {
  return `https://uri.amap.com/navigation?to=${lng},${lat},${address}&callnative=1`
}

/**
 * 获取并缓存地区
 */
export const regionGet = async () => {
  const region = await getStorage(StorageKey.REGION)
  if (region) {
    return Promise.resolve(region)
  } else {
    try {
      let res = await ajax({
        url: url.regionGet,
      })
      const { data = [] } = res
      const regionFormat = regionFormatter(data)
      setStorage(StorageKey.REGION, regionFormat)
      return regionFormat
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

/**
 * 格式化 url 参数
 */
export const stringifyUrlParams = (obj: any) => {
  let str = '?'
  for (let key in obj) {
    let value = obj[key]
    if (value === undefined) {
      value = ''
    }
    str += `${key}=${value}&`
  }
  return str.slice(0, str.length - 1)
}

/**
 * 富文本内容处理
 */
export const richTextReplace = (content = '') => {
  return content.replace(/<img/g, '<img style="display: block;max-width: 100%;height: auto;"')
}

/**
 * 图片大小
 */
export const imageMogr = (size?: Number) => {
  return `?imageMogr2/thumbnail/${size || 160}x`
}

/**
 * 延迟
 * @param time
 */
export const delay = (time: number, isResolve: boolean = true): Promise<void> => {
  return new Promise((resolve, reject) => {
    isResolve ? setTimeout(resolve, time) : setTimeout(reject, time)
  })
}
