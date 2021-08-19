import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { Alert } from 'react-native'
import { StringObj } from '../../types/global'
import actionUser from '../../store/initialReducer/actionUser'

import mainScreenConfig from '../../config/mainScreen.config'
import { ajax, url } from '../../api'
const useRedux = () => {
  const userInfo = useSelector<any, any>(state => state.getIn(['init', 'userInfo']))
  const userOnline = useSelector<any, boolean>(state => state.getIn(['init', 'userOnline']))
  const user_type = useSelector<any, string>(state =>
    state.getIn(['init', 'userInfo', 'user_type']),
  )
  const shopTypeValue = useSelector<any, string>(state =>
    state.getIn(['init', 'userInfo', 'shop_info', 'type_value']),
  )
  const shopUuid = useSelector<any, string>(state => state.getIn(['init', 'userInfo', 'shop_uuid']))
  const dispatch = useDispatch()
  /**
   * 改变用户在线状态
   */
  const changeUserOnline = useCallback(
    (online: boolean) => {
      dispatch(actionUser.changeUserOnline(online))
    },
    [dispatch],
  )
  /**
   * 改变用户信息
   */
  const changeUserInfo = useCallback(
    (userInfo: any) => {
      dispatch(actionUser.changeUserInfo(userInfo))
    },
    [dispatch],
  )
  /**
   * 改变用户信息
   */
  const changeUserInfoItem = useCallback(
    (params: StringObj) => {
      dispatch(actionUser.changeUserInfoItem(params))
    },
    [dispatch],
  )
  /**
   * 未登录提示
   */
  const loginTip = useCallback(navigate => {
    Alert.alert(
      '提示',
      '您还没有登录',
      [
        { text: '去登录', onPress: () => navigate(mainScreenConfig.Login.name) },
        { text: '好的', style: 'cancel' },
      ],
      {
        cancelable: false,
      },
    )
  }, [])

  /**
   * 用户更新
   */
  const userRead = useCallback(() => {
    ajax({
      url: url.userRead,
    })
      .then(res => {
        dispatch(changeUserInfo(res.data))
      })
      .catch(err => {})
  }, [changeUserInfo, dispatch])

  return {
    userInfo,
    userOnline,
    changeUserInfo,
    changeUserOnline,
    changeUserInfoItem,
    loginTip,
    userRead,
    user_type,

    shopUuid,
  }
}

export default useRedux
