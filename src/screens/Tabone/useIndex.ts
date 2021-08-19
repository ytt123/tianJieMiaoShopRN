import { useCallback, useState, useEffect } from 'react'
import { ajax, url } from '../../api'
import { DeviceEventEmitter } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import { dateFormatter } from '../../utils/util'
import useUser from '../../utils/hooks/useUser'
const useIndex = () => {
  const { navigate } = useNavigation()
  const [refresing, setRefreshing] = useState(false)

  const { userOnline, loginTip } = useUser()
  const [topInfo, setTopInfo] = useState<any>({})
  const [list, setList] = useState<any>([])
  const [list2, setList2] = useState<any>([])
  const [list3, setList3] = useState<any>([])

  const now = dateFormatter(new Date(), 'yyyy-MM-dd ')
  const defaults = {
    begin_time: now + '00:00:00',
    end_time: now + '23:59:59',
  }
  const [timeObj] = useState<any>(defaults)

  const getTopData = useCallback(() => {
    ajax({
      url: url.dataCenterHome,
    })
      .then(res => {
        setTopInfo(res?.data)
      })
      .catch(err => {})
  }, [])

  const getListData = useCallback(() => {
    ajax({
      url: url.payGoodsList,
      data: timeObj,
    })
      .then(res => {
        setList(res?.data)
      })
      .catch(err => {})
  }, [timeObj])
  const getList2Data = useCallback(() => {
    ajax({
      url: url.payGoodsSpecList,
      data: timeObj,
    })
      .then(res => {
        setList2(res?.data)
      })
      .catch(err => {})
  }, [timeObj])
  const getList3Data = useCallback(() => {
    ajax({
      url: url.collectionList,
      data: timeObj,
    })
      .then(res => {
        setList3(res?.data)
      })
      .catch(err => {})
  }, [timeObj])

  useEffect(() => {
    if (userOnline) {
      getTopData()
      getListData()
      getList2Data()
      getList3Data()
    } else {
      setTopInfo({})
      setList([])
      setList2([])
      setList3([])
    }
  }, [getTopData, getListData, getList2Data, getList3Data, userOnline, loginTip, navigate])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    if (userOnline) {
      getTopData()
      getListData()
      getList2Data()
      getList3Data()
    } else {
      setTopInfo({})
      setList([])
      setList2([])
      setList3([])
    }
    setRefreshing(false)
  }, [getList2Data, getList3Data, getListData, getTopData, userOnline])
  useEffect(() => {
    let listener = DeviceEventEmitter.addListener('dealRelogin', message => {
      const { type } = message
      if (type === 'dealRelogin') {
        navigate(mainScreenConfig.Login.name)
      }
    })
    return () => {
      if (listener) {
        listener.remove()
      }
    }
  }, [navigate])
  return { topInfo, list, list2, list3, refresing, onRefresh }
}
export default useIndex
