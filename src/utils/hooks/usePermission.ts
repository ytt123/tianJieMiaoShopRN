import React, { useCallback } from 'react'
import { PermissionsAndroid } from 'react-native'
import { Toast } from '@ant-design/react-native'
const usePermission = () => {
  const checkLocationPermission = useCallback(() => {
    try {
      //返回Promise类型
      const granted = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      return granted
    } catch (error) {
      return Promise.reject(error)
    }
  }, [])

  return { checkLocationPermission }
}

export default usePermission
