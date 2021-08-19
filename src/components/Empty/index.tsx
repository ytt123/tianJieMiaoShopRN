import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

// import { useNavigation } from '@react-navigation/native'
import {
  collectionEmptyPng,
  cartEmptyPng,
  commentEmptyPng,
  addressEmptyPng,
  orderEmptyPng,
  goodsListEmptyPng,
} from '../../assets/images'
import mainScreenConfig from '../../config/mainScreen.config'
import style from './style'

interface IndexProps {
  emptyType?:
    | 'cart_empty'
    | 'comment_empty'
    | 'address_empty'
    | 'bank_card_empty'
    | 'collection_empty'
    | 'order_empty'
    | 'goods_list_empty'
}

const Index: React.FC<IndexProps> = props => {
  const { emptyType } = props
  // const { navigate } = useNavigation()

  switch (emptyType) {
    case 'cart_empty':
      return (
        <View style={style.wrapper}>
          <Image style={style.cartEmptyPng} source={{ uri: cartEmptyPng }} />
          <Text style={style.tipText}>您的购物车是空的哦</Text>
        </View>
      )
    case 'comment_empty':
      return (
        <View style={style.wrapper}>
          <Image style={style.commentEmptyPng} source={{ uri: commentEmptyPng }} />
          <Text style={style.tipText}>暂无评价</Text>
        </View>
      )
    case 'address_empty':
      return (
        <View style={style.wrapper}>
          <Image style={style.addressEmptyPng} source={{ uri: addressEmptyPng }} />
          <Text style={style.tipText}>您还没有收货地址哦</Text>
          <TouchableOpacity
            style={style.tipButton}
            // onPress={() => navigate(mainScreenConfig.MyAddressDetail.name)}
          >
            <Text style={style.tipButtonText}>去创建</Text>
          </TouchableOpacity>
        </View>
      )
    case 'bank_card_empty':
      return (
        <View style={style.wrapper}>
          <Image style={style.addressEmptyPng} source={{ uri: addressEmptyPng }} />
          <Text style={style.tipText}>您还没有银行卡哦</Text>
          <TouchableOpacity style={style.tipButton}>
            <Text style={style.tipButtonText}>去创建</Text>
          </TouchableOpacity>
        </View>
      )
    case 'collection_empty':
      return (
        <View style={style.wrapper}>
          <Image style={style.collectionEmptyPng} source={{ uri: collectionEmptyPng }} />
          <Text style={style.tipText}>您的收藏夹啥也没有</Text>
        </View>
      )
    case 'order_empty':
      return (
        <View style={style.wrapper}>
          <Image style={style.orderEmptyPng} source={{ uri: orderEmptyPng }} />
          <Text style={style.tipText}>这里没有您的订单诶</Text>
        </View>
      )
    case 'goods_list_empty':
      return (
        <View style={style.wrapper}>
          <Image style={style.goodsListEmptyPng} source={{ uri: goodsListEmptyPng }} />
        </View>
      )

    default:
      return (
        <View style={style.wrapper}>
          <Image
            style={style.goodsListEmptyPng}
            source={require('../../assets/images/goods_list_empty.png')}
          />
        </View>
      )
  }
}

export default Index
