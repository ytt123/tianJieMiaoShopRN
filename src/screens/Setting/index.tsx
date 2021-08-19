import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import style from './style'
import { Iconfont, Touchable } from '../../components'
import useIndex from './userIndex'
import { Picker } from '@ant-design/react-native'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const {
    region,
    shopInfo,
    logoutClick,
    avatarClick,
    changeClick,
    proviceChange,
    shopBannerClick,
    HistoryLoginClick,
  } = useIndex()

  const {
    province_code,
    city_code,
    area_code,
    address = '',
    name = '',
    thum = '',
    mobile = '',
    imgs = [],
  } = shopInfo || {}
  return (
    <SafeAreaView style={style.wrapper}>
      <ScrollView style={style.wrapper}>
        <View style={style.top}>
          <Image
            source={thum ? { uri: `${thum}` } : require('./assets/Avatar.png')}
            style={style.icon}
          />
          <Touchable onPress={avatarClick}>
            <Text style={style.topText}>点击修改头像</Text>
          </Touchable>
        </View>
        <Touchable
          style={[style.item, { height: 73, alignItems: 'center' }]}
          onPress={shopBannerClick}
        >
          <Text style={[style.titleText, { color: '#000' }]}>店招背景缩略图</Text>
          <View style={style.right}>
            <Image
              source={imgs[0] ? { uri: imgs[0] } : require('./assets/Avatar.png')}
              style={style.backImg}
              resizeMode={'contain'}
            />
          </View>
        </Touchable>

        <Touchable
          style={style.item}
          onPress={() => {
            changeClick('shopName')
          }}
        >
          <Text style={style.titleText}>店铺名称</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#4a4a4a', lineHeight: 44, textAlign: 'right' }}>{name}</Text>
          </View>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </Touchable>
        <Touchable style={style.item}>
          <Text style={style.titleText}>店铺地址</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Picker
              title="选择地区"
              data={region}
              cols={3}
              onOk={(values: string[]) => {
                proviceChange(values[0], values[1], values[2])
              }}
              value={[province_code, city_code, area_code]}
            >
              <CustomChildren />
            </Picker>
          </View>

          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </Touchable>
        <Touchable
          style={style.item}
          onPress={() => {
            changeClick('address')
          }}
        >
          <Text style={style.titleText}>详细地址</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#4a4a4a', lineHeight: 44, textAlign: 'right' }}>{address}</Text>
          </View>

          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </Touchable>

        <Touchable
          style={style.item}
          onPress={() => {
            changeClick('changeBind')
          }}
        >
          <Text style={style.titleText}>手机号</Text>
          <View style={style.right}>
            <Text style={style.desText}>{mobile}</Text>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </Touchable>
        <Touchable
          style={[style.item]}
          onPress={() => {
            changeClick('ChangeLoginCheck')
          }}
        >
          <Text style={style.titleText}>登录密码</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </Touchable>
        <Touchable style={[style.item]} onPress={HistoryLoginClick}>
          <Text style={style.titleText}>最近登录记录</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </Touchable>
      </ScrollView>
      <Touchable style={style.btnWrap} onPress={logoutClick}>
        <Text>退出登录</Text>
      </Touchable>
    </SafeAreaView>
  )
}

export default Index
const CustomChildren = (props: any) => (
  <Touchable onPress={props.onPress} style={{ width: 300 }}>
    <Text style={{ color: '#4a4a4a', lineHeight: 44, textAlign: 'right' }}>{props.extra}</Text>
  </Touchable>
)
