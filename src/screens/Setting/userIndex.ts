import { useCallback, useEffect, useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import useSpinner from '../../utils/hooks/useSpinner'
import { ajax, url } from '../../api'
import useUser from '../../utils/hooks/useUser'
import { qiniuFileUpload } from '../../utils/file'
import { showImagePicker } from '../../utils/fs/imageSelect'
import { regionGet } from '../../utils/util'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { actionUser } from '../../store/initialReducer'
const useIndex = () => {
  const navigation = useNavigation()
  const { navigate } = navigation
  const dispatch = useDispatch()
  const logout = useCallback(() => {
    dispatch(actionUser.logout(navigation))
  }, [dispatch, navigation])
  const { spinningChange } = useSpinner()
  const { shopUuid = '' } = useUser()
  const [region, setRegion] = useState<any[]>([])
  const [shopInfo, setShopInfo] = useState<any>({})
  const { type_value, province_code: shop_province_code, address } = shopInfo || {}
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
  /**
   * 修改店铺信息
   */
  const editShopInfo = useCallback(
    (params: any) => {
      spinningChange(true)
      ajax({
        url: url.shopsUpdate,
        data: { ...params, type_value, shop_province_code },
      })
        .then(res => {
          spinningChange(false)
          setShopInfo(res.data)
        })
        .catch(err => {
          spinningChange(false)
        })
    },
    [shop_province_code, spinningChange, type_value],
  )

  /**
   * 修改头像
   */
  const avatarClick = useCallback(async () => {
    const imageRes = await showImagePicker('photo')
    spinningChange(true)
    const avatarRes = await qiniuFileUpload(imageRes, shopUuid)
    spinningChange(false)
    editShopInfo({ thum: avatarRes?.url })
    // changeUserInfoItem({ avatar: avatarRes?.url })
  }, [editShopInfo, shopUuid, spinningChange])

  const HistoryLoginClick = useCallback(() => {
    navigate(mainScreenConfig.HistoryLogin.name)
  }, [navigate])

  /**
   * 修改背景图
   */
  const shopBannerClick = useCallback(async () => {
    const imageRes = await showImagePicker('photo')
    spinningChange(true)
    const avatarRes = await qiniuFileUpload(imageRes, shopUuid)
    spinningChange(false)
    editShopInfo({ imgs: [avatarRes?.url] })
    // changeUserInfoItem({ img: avatarRes?.url })
  }, [editShopInfo, shopUuid, spinningChange])

  /**
   * 修改信息
   */
  const changeClick = useCallback(
    (type: string) => {
      navigate(mainScreenConfig.SettingChange.name, { type, type_value })
    },
    [navigate, type_value],
  )

  const logoutClick = useCallback(() => {
    Alert.alert(
      '确认退出登录？',
      undefined,
      [
        { text: '退出', onPress: logout },
        { text: '取消', style: 'cancel' },
      ],
      {
        cancelable: false,
      },
    )
  }, [logout])

  /**
   * 省市县
   */
  const proviceChange = useCallback(
    (value1, value2, value3) => {
      editShopInfo({ province_code: value1, city_code: value2, area_code: value3, address })
    },
    [address, editShopInfo],
  )

  useEffect(() => {
    regionGet().then((region = []) => setRegion(region))
  }, [])

  useFocusEffect(
    useCallback(() => {
      getShopInfo()
    }, [getShopInfo]),
  )

  return {
    region,
    shopInfo,
    proviceChange,
    avatarClick,
    logoutClick,
    changeClick,
    shopBannerClick,
    HistoryLoginClick,
  }
}

export default useIndex
