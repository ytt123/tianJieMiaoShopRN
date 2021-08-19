/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react'
import Navigator from './Navigator'
import { Provider, useDispatch } from 'react-redux'
import store from './store'
import useUser from './utils/hooks/useUser'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { getStorage, StorageKey } from './utils/storage'
import { Provider as AntDesignProvider } from '@ant-design/react-native'
import { Spinner, PermissionAndroidView, NewCoupons } from './components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootSiblingParent } from 'react-native-root-siblings'
// import * as WeChat from 'react-native-wechat-lib'
import { action } from './store/initialReducer'
// import './wxInit'

export default () => (
  <RootSiblingParent>
    <SafeAreaProvider>
      <Provider store={store}>
        <AntDesignProvider>
          <ActionSheetProvider>
            <Navigator />
          </ActionSheetProvider>
          <Init />
        </AntDesignProvider>
      </Provider>
    </SafeAreaProvider>
  </RootSiblingParent>
)

const Init: React.FC = () => {
  const { changeUserOnline, changeUserInfo } = useUser()

  useEffect(() => {
    getStorage(StorageKey.USER_INFO)
      .then(userInfo => {
        if (userInfo) {
          changeUserInfo(userInfo)
        }
      })
      .catch(_err => {})

    getStorage(StorageKey.USER_ONLINE)
      .then(userOnline => {
        if (userOnline?.online) {
          changeUserOnline(userOnline.online)
        }
      })
      .catch(_err => {})
  }, [changeUserInfo, changeUserOnline])
  const dispatch = useDispatch()
  useEffect(() => {
    // WeChat.isWXAppInstalled()
    //   .then(flag => {
    //     dispatch(action.isWxInstalledChange(flag))
    //   })
    //   .catch(err => {})
  }, [dispatch])

  return (
    <>
      <Spinner />
      {/* <FirstModal /> */}
      {/* <NewCoupons /> */}
      <PermissionAndroidView />
    </>
  )
}
