import * as constants from './constants'
import { setStorage, StorageKey, getStorage, rmStorage } from '../../utils/storage'
import { ajax, url } from '../../api'
import { StringObj } from '../../types/global'
// import { action as homeAction } from '../../screens/Home/store'

const changeUserOnline = (userOnline: boolean) => (dispatch: any) => {
  setStorage(StorageKey.USER_ONLINE, { online: userOnline })
  dispatch({
    type: constants.CHANGE_USER_ONLINE,
    userOnline,
  })
}

const changeUserInfo = (userInfo: any) => (dispatch: any) => {
  setStorage(StorageKey.USER_INFO, userInfo)
  dispatch({
    type: constants.CHANGE_USER_INFO,
    userInfo,
  })
}

const changeUserInfoItem = (params: StringObj) => (dispatch: any) => {
  getStorage(StorageKey.USER_INFO)
    .then(userInfo => {
      Object.assign(userInfo, params)
      setStorage(StorageKey.USER_INFO, userInfo)
      dispatch({
        type: constants.CHANGE_USER_INFO_ITEM,
        params,
      })
    })
    .catch(err => {})
}

const logout = (navigation: any) => (dispatch: any) => {
  dispatch(changeUserInfo({}))
  dispatch(changeUserOnline(false))
  // dispatch(homeAction.reset())
  //
  //清除
  navigation.goBack()
  ajax({
    url: url.logout,
  })
    .then(res => {
      rmStorage(StorageKey.TOKEN_INFO)
    })
    .catch(err => {})
}

export default {
  changeUserOnline,
  changeUserInfo,
  changeUserInfoItem,
  logout,
}
