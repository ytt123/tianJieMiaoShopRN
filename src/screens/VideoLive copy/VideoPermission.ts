import { PermissionsAndroid } from 'react-native'

export default async function requestCameraAndAudioPermission() {
  const permission1 = PermissionsAndroid.PERMISSIONS.CAMERA
  const permission2 = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO

  const hasPermission1 = await PermissionsAndroid.check(permission1)
  const hasPermission2 = await PermissionsAndroid.check(permission2)

  if (hasPermission1 && hasPermission2) {
    return true
  }

  const status1 = await PermissionsAndroid.request(permission1)
  const status2 = await PermissionsAndroid.request(permission2)

  return status1 === 'granted' && status2 === 'granted'
}
