import { Linking, ActionSheetIOS, Platform } from 'react-native'
import ActionSheet from 'react-native-general-actionsheet'

// 腾讯地图开发者key
let tmapKey = ''

// 下载地图app地址
const DownloadUrl = {
  android: {
    GaoDe: 'http://mobile.amap.com',
    BaiDu: 'http://map.baidu.com',
    TengXun: `https://pr.map.qq.com/j/tmap/download?key=${tmapKey}`,
  },
  ios: {
    GaoDe: 'https://itunes.apple.com/cn/app/gao-tu-zhuan-ye-shou-ji-tu/id461703208?mt=8',
    BaiDu: 'https://itunes.apple.com/cn/app/bai-du-tu-shou-ji-tu-lu-xian/id452186370?mt=8',
    TengXun: `https://pr.map.qq.com/j/tmap/download?key=${tmapKey}`,
  },
}

// 第三方地图应用Url
const openUrl = ({ startLocation, destLocation, mode, type, appName }) => {
  // 高德地图参数配置
  const GaoDeDev = type === 'gcj02' ? 0 : 1 // 起终点是否偏移(0:lat 和 lon 是已经加密后的,不需要国测加密; 1:需要国测加密)
  const GaoDeT = '' // 导航模式: t = 0（驾车）= 1（公交）= 2（步行）= 3（骑行）= 4（火车）= 5（长途客车）

  // IOS系统地图配置
  const IOSDirflg = ''

  if (Platform.OS === 'android') {
    return [
      [
        '高德地图',
        `amapuri://route/plan/?sourceApplication=${appName}${
          startLocation.title
            ? '&slat=' +
              startLocation.lat +
              '&slon=' +
              startLocation.lng +
              '&sname=' +
              startLocation.title
            : ''
        }&dlat=${destLocation.lat}&dlon=${destLocation.lng}&dname=${
          destLocation.title
        }&dev=${GaoDeDev}&m=0&t=${GaoDeT}&rideType=elebike`,
        ,
      ],
    ]
  }
  return [
    [
      '高德地图',
      `iosamap://path?sourceApplication=${appName}&slat=${startLocation.lat}&slon=${startLocation.lng}&sname=${startLocation.title}&dlat=${destLocation.lat}&dlon=${destLocation.lng}&dname=${destLocation.title}&dev=${GaoDeDev}&m=0&t=${GaoDeT}&rideType=elebike`,
      ,
    ],

    [
      'Apple地图',
      `http://maps.apple.com/?ll=${destLocation.lat},${destLocation.lng}&q=${destLocation.title}&dirflg=${IOSDirflg}`,
      ,
    ],
  ]
}

/**
 * 系统内没有任何第三方地图应用，提示推荐下载列表
 */
const downloadTip = () => {
  const obj = Platform.OS === 'android' ? ActionSheet : ActionSheetIOS
  obj.showActionSheetWithOptions(
    {
      title: '暂未安装相关地图应用',
      options: ['取消', '高德地图'],
      cancelButtonIndex: 0,
    },
    buttonIndex => {
      const { GaoDe, BaiDu, TengXun } = DownloadUrl[Platform.OS]
      let url = 0
      switch (buttonIndex) {
        case 1:
          url = GaoDe
          break
        case 2:
          url = BaiDu
          break
        case 3:
          url = TengXun
          break
        default:
          url = GaoDe
      }
      Linking.canOpenURL(url).then(result => {
        if (result) {
          Linking.openURL(url)
        }
      })
    },
  )
}

/**
 * 显示已经存在的第三方地图应用
 */
const showExistApp = maps => {
  Linking.openURL(maps[0][1])
}

/**
 * 规划路线
 */
const planRoute = ({
  startLocation = {},
  destLocation = {},
  mode = 'ride',
  type = 'gcj02',
  appName = 'MapLinking',
}) => {
  const maps = openUrl({ startLocation, destLocation, mode, type, appName })
  const promises = maps.map(item => {
    return Linking.canOpenURL(item[1])
  })

  Promise.all(promises)
    .then(results => {
      return maps.filter((item, index) => results[index] && item[0] === '高德地图')
    })
    .then(choices => {
      if (!choices.length) {
        // 系统内没有任何地图，展示推荐下载列表
        downloadTip()
      } else {
        showExistApp(choices)
      }
    })
}

/**
 * 初始化值(如果想兼容腾讯地图，需要传入腾讯开发者Key)
 * 【申请地址】 https://lbs.qq.com/console/key.html
 */
const init = ({ tmapKey: refererKey = '' }) => {
  tmapKey = refererKey
}

const MapLinking = () => {}

MapLinking.planRoute = planRoute
MapLinking.init = init

export default MapLinking
