import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions, ScrollView, Image } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import md5 from 'blueimp-md5'
import { imageMogr } from '../../utils/util'
import style from './style'
import { Iconfont, Touchable } from '../../components'
import Stepper from './Stepper'
export type Origin = 'GoodsCart' | 'GoodsDetail'
interface IndexProps {
  goods: any
  specGroupInfo: any
  setSpecGroupInfo: any
  submit: any
  cartAdd?: any
  origin?: Origin
  modalClose?: any
  setNum?: any
  num?: number
}

const Index: React.FC<IndexProps> = props => {
  const { bottom } = useSafeArea()
  const { height } = useWindowDimensions()
  const {
    goods,
    setSpecGroupInfo,
    specGroupInfo,
    submit,
    cartAdd,
    origin = 'GoodsDetail',
    modalClose,
    num,
    setNum,
  } = props
  const { spec_info = {}, thum, spec_group_info = [], sell_price, stock } = goods
  const { content = [] } = spec_info
  const [specSelect, setSpecSelect] = useState<any>({})

  const optionClick = useCallback((spec, option) => {
    setSpecSelect((pre: any) => ({
      ...pre,
      [spec.name]: option.name,
    }))
  }, [])

  useEffect(() => {
    const idStr = md5(
      Object.keys(specSelect)
        .map(item => md5(`${item}_${specSelect[item]}`))
        .sort()
        .join('@'),
    )

    const specGroupInfo = spec_group_info.find((item: any) => item.id_str === idStr)

    if (specGroupInfo) {
      setSpecGroupInfo(specGroupInfo)
    }
  }, [setSpecGroupInfo, specSelect, spec_group_info])

  const goodsImg = specGroupInfo.thum || thum
  return (
    <View style={[style.wrapper, { paddingBottom: bottom, height: (height * 2) / 3.5 }]}>
      <View style={style.goodsView}>
        <Image
          style={style.goodsImage}
          source={
            goodsImg
              ? { uri: `${goodsImg}${imageMogr(375)}` }
              : require('../../assets/images/default.png')
          }
        />
        <View style={style.goodsInfo}>
          <Text style={style.goodsPrice}>¥{specGroupInfo.sell_price || sell_price}</Text>
          <Text style={style.goodsText}>已选：{specGroupInfo.spec_group_option}</Text>
          <Text style={style.goodsText1}>库存：{specGroupInfo.stock || stock}</Text>
        </View>

        <Touchable onPress={modalClose} isflow={1}>
          <Iconfont iconfont={'\ue65a'} style={style.icon} />
        </Touchable>
      </View>
      <ScrollView style={style.scroll}>
        {content.map((spec: any) => {
          const { id, name, options = [] } = spec

          return (
            <View style={style.specView} key={id}>
              <Text style={style.specName}>{name}</Text>
              <View style={style.optionsView}>
                {options.map((option: any) => {
                  const { id, name } = option
                  const isSelect = specSelect[spec.name] === name
                  return (
                    <TouchableOpacity
                      style={[style.optionView, isSelect && style.optionsViewActive]}
                      key={id}
                      onPress={() => {
                        optionClick(spec, option)
                      }}
                    >
                      <Text style={[style.optionName, isSelect && style.optionNameActive]}>
                        {name}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
            </View>
          )
        })}
        {origin === 'GoodsDetail' && <Stepper num={num} setNum={setNum} />}
      </ScrollView>

      {origin === 'GoodsDetail' && (
        <View style={style.buttonView}>
          <TouchableOpacity style={style.button} onPress={cartAdd}>
            <Text style={style.buttonText}>加入购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, style.buttonRight]} onPress={submit}>
            <Text style={style.buttonText}>立即购买</Text>
          </TouchableOpacity>
        </View>
      )}
      {origin === 'GoodsCart' && (
        <View style={style.buttonView}>
          <TouchableOpacity style={[style.button, style.buttonRight]} onPress={submit}>
            <Text style={style.buttonText}>立即购买</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Index
