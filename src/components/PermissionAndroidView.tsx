import React, { useEffect } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'
import { Toast } from '@ant-design/react-native'
interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const requests = async () => {
    try {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]
      //返回得是对象类型
      // const granteds =
      await PermissionsAndroid.requestMultiple(permissions)
      // var data = '是否同意地址权限: '
      // if (granteds['android.permission.ACCESS_FINE_LOCATION'] === 'granted') {
      //   data = data + '是\n'
      // } else {
      //   data = data + '否\n'
      // }
      // data = data + '是否同意相机权限: '
      // if (granteds['android.permission.CAMERA'] === 'granted') {
      //   data = data + '是\n'
      // } else {
      //   data = data + '否\n'
      // }
      // data = data + '是否同意存储权限: '
      // if (granteds['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted') {
      //   data = data + '是\n'
      // } else {
      //   data = data + '否\n'
      // }
      // data = data + '是否同意麦克风权限: '
      // if (granteds['android.permission.RECORD_AUDIO'] === 'granted') {
      //   data = data + '是\n'
      // } else {
      //   data = data + '否\n'
      // }
    } catch (err) {
      Toast.show(err.toString())
    }
  }

  useEffect(() => {
    Platform.OS === 'android' && requests()
  }, [])
  return null
}

export default Index
