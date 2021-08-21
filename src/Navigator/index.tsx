/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Login,
  Setting,
  SettingChange,
  LogisticsDetail,
  SettingList,
  MyBankLIst,
  MyBenefit,
  VideoLive,
  MyWithdrawals,
  PublishVideo,
  MyIncomeDetail,
  RankList,
  MyHtml,
  TryVideoLive,
  HistoryLogin,
} from '../screens'

import TabNavigator, { optionGet } from './TabNavigator'
import mainScreenConfig from '../config/mainScreen.config'
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#030303',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
        }}
      >
        {/* <Stack.Screen
          name={'test'}
          component={VideoLive}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name={mainScreenConfig.TabNavigator.name}
          component={TabNavigator}
          options={optionGet}
        />
        <Stack.Screen
          name={mainScreenConfig.Login.name}
          component={Login}
          options={{
            title: mainScreenConfig.Login.title,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name={mainScreenConfig.Setting.name}
          component={Setting}
          options={{
            title: mainScreenConfig.Setting.title,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name={mainScreenConfig.SettingChange.name}
          component={SettingChange}
          options={{
            title: mainScreenConfig.SettingChange.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.LogisticsDetail.name}
          component={LogisticsDetail}
          options={{
            title: mainScreenConfig.LogisticsDetail.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.SettingList.name}
          component={SettingList}
          options={{
            title: mainScreenConfig.SettingList.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.MyBankLIst.name}
          component={MyBankLIst}
          options={{
            title: mainScreenConfig.MyBankLIst.title,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name={mainScreenConfig.MyBenefit.name}
          component={MyBenefit}
          options={{
            title: mainScreenConfig.MyBenefit.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.MyWithdrawals.name}
          component={MyWithdrawals}
          options={{
            title: mainScreenConfig.MyWithdrawals.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.PublishVideo.name}
          component={PublishVideo}
          options={{
            title: mainScreenConfig.PublishVideo.title,
            headerBackTitleVisible: false,
            // headerShown: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.MyIncomeDetail.name}
          component={MyIncomeDetail}
          options={{
            title: mainScreenConfig.MyIncomeDetail.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.RankList.name}
          component={RankList}
          options={{
            title: mainScreenConfig.RankList.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.MyHtml.name}
          component={MyHtml}
          options={{
            title: mainScreenConfig.MyHtml.title,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={mainScreenConfig.TryVideoLive.name}
          component={TryVideoLive}
          options={{
            title: mainScreenConfig.TryVideoLive.title,
            headerBackTitleVisible: false,
            // gesturesEnabled: false,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={mainScreenConfig.VideoLive.name}
          component={VideoLive}
          options={{
            title: mainScreenConfig.VideoLive.title,
            headerBackTitleVisible: false,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={mainScreenConfig.HistoryLogin.name}
          component={HistoryLogin}
          options={{
            title: mainScreenConfig.HistoryLogin.title,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
