import React from 'react'
import { View, Text, RefreshControl, Image, ScrollView, ImageBackground } from 'react-native'
import style from './style'
import { Iconfont, Touchable } from '../../components'
import useIndex from './useIndex'
import useUser from '../../utils/hooks/useUser'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Top from './Top'
import Top1 from './Top1'
import Top2 from './Top2'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const { userOnline } = useUser()
  const {
    refreshing,
    onRefresh,
    SettingsClick,
    PublishVideoClick,
    loginClick,
    orderData,
    moneyData,
    shopData,
  } = useIndex()
  const { top } = useSafeAreaInsets()
  const { type_value, name, thum } = shopData || {}
  return (
    <View style={[style.wrapper]}>
      <ScrollView
        contentContainerStyle={[style.wrapper1]}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <ImageBackground
          style={[style.topbg, { paddingTop: top }]}
          source={require('./assets/icon.png')}
        >
          <View style={style.avatarWrap}>
            <Image
              source={thum ? { uri: thum } : require('./assets/Avatar.png')}
              style={style.avatar}
            />
            <View style={style.textWrap}>
              {userOnline ? (
                <View>
                  <Text style={style.nameText}>{name}</Text>
                  <View style={style.phone}>
                    <Text style={style.phoneText}>
                      {type_value === 'NATIONAL'
                        ? '全国级'
                        : type_value === 'PROVINCE'
                        ? '省级'
                        : ''}
                    </Text>
                  </View>
                </View>
              ) : (
                <Touchable onPress={loginClick}>
                  <Text style={style.nameText}>点击登录</Text>
                </Touchable>
              )}
            </View>
            {userOnline && (
              <View style={style.btns}>
                <Touchable onPress={SettingsClick} isflow={1}>
                  <Iconfont iconfont={'\ue728'} size={24} style={style.icons} />
                </Touchable>
                <Touchable onPress={PublishVideoClick} isflow={1} style={style.btnWrap}>
                  <Text style={style.btnText}>申请直播</Text>
                </Touchable>
              </View>
            )}
          </View>
        </ImageBackground>
        <View style={style.bom}>
          <Top data={orderData} />
          <Top1 data={moneyData} />
          <Top2 />
        </View>
      </ScrollView>
    </View>
  )
}

export default Index
