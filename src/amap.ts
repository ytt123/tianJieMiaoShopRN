import { PermissionsAndroid, Platform } from 'react-native'
import { init } from 'react-native-amap-geolocation'
import { AMAP_IOS_KEY, AMAP_ANDROID_KEY } from './constants/key.constants'
async function start() {
  if (Platform.OS === 'android') {
    // 对于 Android 需要自行根据需要申请权限
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
  }
  // 使用自己申请的高德 App Key 进行初始化
  await init({
    ios: AMAP_IOS_KEY,
    android: AMAP_ANDROID_KEY,
  })
}
// start()
