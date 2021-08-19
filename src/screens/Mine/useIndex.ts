import { useState, useCallback } from 'react'
import useUser from '../../utils/hooks/useUser'
import { useFocusEffect } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import { useNavigation } from '@react-navigation/native'
import { ajax, url } from '../../api'
const useIndex = () => {
  const { userOnline, userRead } = useUser()
  const { navigate } = useNavigation()
  const [shopData, setShopData] = useState<any>({})
  const [orderData, setOrderData] = useState<any>({})
  const [moneyData, setMoneyData] = useState<any>({})
  const orderInit = useCallback(() => {
    ajax({ url: url.dataCentershopCount, data: {} })
      .then(res => {
        setOrderData(res?.data)
      })
      .catch(err => {})
  }, [])
  const moneyInit = useCallback(() => {
    ajax({
      url: url.commissionLogsCount,
    })
      .then(res => {
        setMoneyData(res?.data)
      })
      .catch(err => {})
  }, [])
  const shopRead = useCallback(() => {
    ajax({
      url: url.shopsRead,
    })
      .then(res => {
        setShopData(res?.data)
      })
      .catch(err => {})
  }, [])

  const dataInit = useCallback(() => {
    if (userOnline) {
      userRead() //获取当前用户信息
      shopRead() //获取dianp信息
      orderInit()
      moneyInit()
    } else {
      setShopData({})
      setOrderData({})
      setMoneyData({})
    }
  }, [moneyInit, orderInit, shopRead, userOnline, userRead])
  useFocusEffect(
    useCallback(() => {
      dataInit()
      return () => {
        dataInit()
      }
    }, [dataInit]),
  )
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    dataInit()
    setRefreshing(false)
  }, [dataInit])

  const SettingsClick = useCallback(() => {
    navigate(mainScreenConfig.Setting.name)
  }, [navigate])
  const loginClick = useCallback(() => {
    navigate(mainScreenConfig.Login.name)
  }, [navigate])

  const PublishVideoClick = useCallback(() => {
    navigate(mainScreenConfig.PublishVideo.name)
  }, [navigate])

  return {
    userOnline,
    refreshing,
    onRefresh,
    SettingsClick,
    loginClick,
    orderData,
    moneyData,
    shopData,
    PublishVideoClick,
  }
}
export default useIndex
