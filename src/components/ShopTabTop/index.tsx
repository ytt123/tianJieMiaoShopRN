import React, { useEffect, useState, useCallback } from 'react'

import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import Star from './Star'
import { Iconfont, Touchable } from '../../components'
import { SegmentedBar } from 'teaset'
import TabText from './TabText'
import mainScreenConfig from '../../config/mainScreen.config'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface IndexProps {
  tabs?: any
  ishow?: any
  shopSegIndex?: number
  setShopSegIndex?: any
  type?: any
  CarouselRef?: any
  data: any
  follow: any
  isCollect: any
  cancelfollow: any
  addToHome: any
}
const Index: React.FC<IndexProps> = props => {
  const {
    ishow,
    shopSegIndex,
    setShopSegIndex,
    tabs,
    CarouselRef,
    type,
    data: shopInfo,
    follow,
    isCollect,
    cancelfollow,
    addToHome,
  } = props

  const [value, setValue] = useState(ishow)
  useEffect(() => {
    setTimeout(() => {
      setValue(value)
    }, 2000)
  }, [value])
  const { top } = useSafeAreaInsets()
  const {
    name = '店铺名称',
    thum,
    brand_score,
    service_score,
    uuid,
    province = '',
    city = '',
    area = '',
    address = '',
    desc = '',
  } = shopInfo || {}
  const navigation = useNavigation()
  const home = useCallback(() => {
    navigation.goBack()
  }, [navigation])
  const search = useCallback(() => {
    navigation.navigate(mainScreenConfig.ShopSearch.name)
  }, [navigation])

  const detail = useCallback(() => {}, [])

  return (
    <ImageBackground source={require('./assets/bg.png')} style={[style.wrapper]}>
      <View style={[style.top, { paddingTop: top }]}>
        <TouchableOpacity
          style={style.topLeft}
          onPress={() => {
            home()
          }}
        >
          <Image source={require('./assets/icon.png')} style={style.homeIcon} />
        </TouchableOpacity>
        <View style={style.topcenter}>
          <Image
            source={thum ? { uri: thum } : require('./assets/shopIcon.png')}
            style={style.topIcon}
          />
          <Text style={style.titleText}>{name}</Text>
        </View>
        <View style={style.topLeft} />
      </View>
      <View style={style.center}>
        <View style={style.centerTop}>
          <Touchable
            onPress={() => {
              detail()
            }}
            isflow={true}
          >
            <Text style={style.centerText}>品牌简介</Text>
          </Touchable>

          <View style={{ flex: 1 }}>
            <Iconfont iconfont={'\ue6a3'} style={style.centerText} />
          </View>
          <Touchable
            style={isCollect ? style.centerBtnWrap : style.centerBtnWrap}
            onPress={() => {
              isCollect ? cancelfollow() : follow()
            }}
          >
            <Text style={style.centerBtnText}>{isCollect ? '已关注' : '关注'}</Text>
          </Touchable>
          <Touchable
            style={style.centerBtnWrap1}
            onPress={() => {
              addToHome()
            }}
          >
            <Text style={style.centerBtnText}>添加首页</Text>
          </Touchable>
        </View>
        <View style={style.starWrap}>
          <View style={style.starItem}>
            <Text style={[style.centerBtnText, { marginRight: 5 }]}>品牌</Text>
            <Star score={Number(brand_score)} />
          </View>
          <View style={{ width: 10 }} />
          <View style={style.starItem}>
            <Text style={[style.centerBtnText, { marginRight: 5 }]}>服务</Text>
            <Star score={Number(service_score)} />
          </View>
        </View>
        <View style={style.addressWrap}>
          <Iconfont iconfont={'\ue650'} style={style.addressIcon} />
          <Text style={style.centerBtnText}>{`${province}${city}${area}${address}`}</Text>
        </View>
      </View>
      {type === 'tab' ? (
        <View style={style.bom}>
          <TouchableOpacity
            onPress={() => {
              search()
            }}
          >
            <Iconfont iconfont={'\ue744'} style={style.searchIcon} />
          </TouchableOpacity>

          <SegmentedBar
            style={style.seg}
            onChange={(index: number) => {
              setShopSegIndex(index)
              CarouselRef.current.scrollToPage(index, false)
            }}
            activeIndex={shopSegIndex}
          >
            {tabs.map((cur, index: number) => {
              return <TabText text={cur} key={index} isSele={index === shopSegIndex} />
            })}
          </SegmentedBar>
        </View>
      ) : (
        <View style={style.bom1}>
          <TouchableOpacity
            onPress={() => {
              search()
            }}
            activeOpacity={0.8}
            style={style.searchBtn}
          >
            <Iconfont iconfont={'\ue744'} style={style.smallSearchIcon} />
            <Text style={style.searchText}>请输入商品名称</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  )
}

export default Index
