import { useState, useEffect, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StringObj } from '../../types/global'
import { ajax, url } from '../../api'

import useSpinner from '../../utils/hooks/useSpinner'
const screenTypeMap: StringObj = {
  changeBind: '修改手机号',
  bind: '设置手机号',
  changeLogin: '设置密码',
  address: '设置详细地址',
  shopName: '设置店铺名称',
  ChangeLoginCheck: '安全验证',
}

const useIndex = (type: string, value: string) => {
  const navigation = useNavigation()
  const { spinningChange } = useSpinner()
  const [screenType, setScreenType] = useState<string>(type)
  const { goBack } = useNavigation()

  useEffect(() => {
    navigation.setOptions({ title: screenTypeMap[screenType] })
  }, [navigation, screenType])

  const [shopInfo, setShopInfo] = useState<any>({})
  const { type_value, province_code: shop_province_code } = shopInfo
  /**
   * 获取店铺信息
   */
  const getShopInfo = useCallback(() => {
    spinningChange(true)
    ajax({
      url: url.shopsRead,
    })
      .then(res => {
        spinningChange(false)
        setShopInfo(res.data)
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [spinningChange])

  useEffect(() => {
    getShopInfo()
  }, [getShopInfo])
  //修改店铺详细地址和店铺名称
  const save = useCallback(() => {
    ajax({
      url: url.shopsUpdate,
      data:
        screenType === 'address'
          ? { address: value, type_value, shop_province_code }
          : { name: value, type_value, shop_province_code },
    })
      .then(res => {
        goBack()
      })
      .catch(err => {})
  }, [goBack, screenType, shop_province_code, type_value, value])
  return {
    screenType,
    setScreenType,
    save,
    shopInfo,
  }
}

export default useIndex
