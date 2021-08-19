import React from 'react'
import { Tabone, TabTwo, Mine } from '../../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tabScreenConfig from '../../config/tabScreen.config'
// import useDeviceInfo from '../../utils/hooks/useDeviceInfo'
import { Iconfont } from '../../components'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
const { Navigator, Screen } = createBottomTabNavigator()

interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  // const { fontScale } = useDeviceInfo()
  // const iconSize = 21 / fontScale + 8;
  return (
    <Navigator
      initialRouteName={tabScreenConfig.Tabone.name}
      tabBarOptions={{
        activeTintColor: '#FF2442',
        labelStyle: { fontSize: 15 },
        inactiveTintColor: '#666',
      }}
    >
      <Screen
        name={tabScreenConfig.Tabone.name}
        component={Tabone}
        options={{
          title: tabScreenConfig.Tabone.title,
          tabBarIcon: ({ color, focused }) => (
            <Iconfont iconfont={focused ? '\ue750' : '\ue751'} style={{ color, fontSize: 24 }} />
          ),
        }}
      />
      <Screen
        name={tabScreenConfig.TabTwo.name}
        component={TabTwo}
        options={{
          title: tabScreenConfig.TabTwo.title,
          tabBarIcon: ({ color, focused }) => (
            <Iconfont iconfont={focused ? '\ue7db' : '\ue706'} style={{ color, fontSize: 24 }} />
          ),
        }}
      />

      <Screen
        name={tabScreenConfig.Mine.name}
        component={Mine}
        options={{
          title: tabScreenConfig.Mine.title,
          tabBarIcon: ({ color, focused }) => (
            <Iconfont iconfont={focused ? '\ue735' : '\ue736'} style={{ color, fontSize: 24 }} />
          ),
        }}
      />
    </Navigator>
  )
}

export default Index

export const optionGet = ({ route, navigation }: any) => {
  // const index = route.state?.index || 0
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Tabone'
  switch (routeName) {
    case 'Tabone':
      return {
        title: '账务管理',
      }
    case 'TabTwo':
      return {
        title: '订单列表',
      }

    default:
      return {
        headerShown: false,
      }
  }
}
