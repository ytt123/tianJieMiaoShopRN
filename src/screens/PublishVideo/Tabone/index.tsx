import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, Image } from 'react-native'
import style from './style'
import { Iconfont, Touchable } from '../../../components'
import GoodsModal from '../GoodsModal'
import useIndex from './useIndex'
import Top from '../Top'
import Cell from '../Cell'

import BigCell from '../BigCell'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const [visibleGoods, setVisibleGoods] = useState(false)
  const [visibleRecommendGoods, setVisibleRecommendGoods] = useState(false)
  const {
    info,
    setInfo,
    recomInfo,
    setRecomInfo,
    submit,
    addClick,
    isFormal,
    setIsFormal,
    thum,
    title,
    setTitle,
    setPre_begin_time,
    isPredictLive,
    setIsPredictLive,
    predictTime,
    setPredictTime,
  } = useIndex()

  return (
    <View style={style.safe}>
      <ScrollView style={style.wrapper}>
        <View style={[style.topWrap, style.borwrap]}>
          {thum ? (
            <Touchable activeOpacity={1} onPress={addClick} style={style.addimgWrap}>
              <Image source={{ uri: thum }} style={style.addimg} />
            </Touchable>
          ) : (
            <Touchable activeOpacity={1} onPress={addClick} style={style.addimgWrap}>
              <Iconfont iconfont={'\ue767'} style={style.icon} />
              <View style={{ alignItems: 'center' }}>
                <Text style={style.imgText}>{'上传直播封面'}</Text>
              </View>
            </Touchable>
          )}

          <View style={style.topRight}>
            <View style={style.inputWrap}>
              <TextInput
                style={style.input}
                placeholder="请输入直播标题"
                defaultValue={title}
                onChangeText={text => {
                  setTitle(text.trim())
                }}
                placeholderTextColor={'#999'}
              />
            </View>
            <View style={style.inputWrap}>
              <Top setPre_begin_time={setPre_begin_time} />
            </View>
          </View>
        </View>

        <View style={style.borwrap}>
          <Cell
            title={'推荐商品'}
            ismore
            isShowLine
            press={() => {
              setVisibleRecommendGoods(true)
            }}
          />
          <Cell
            title={'添加商品'}
            ismore
            press={() => {
              setVisibleGoods(true)
            }}
          />
        </View>
        <View style={style.borwrap}>
          <Cell
            issele={!isFormal}
            title={'试播'}
            isShowLine
            press={() => {
              setIsFormal(false)
            }}
          />
          <Cell
            issele={isFormal}
            title={'正式直播'}
            press={() => {
              setIsFormal(true)
            }}
          />
        </View>

        <View style={style.borwrap}>
          <BigCell choosecb={setPredictTime} isSele={isPredictLive} selecb={setIsPredictLive} />
        </View>
      </ScrollView>
      <View style={style.btns}>
        <Touchable style={style.btn} onPress={submit}>
          <Text style={style.btnText}>开启直播</Text>
        </Touchable>
      </View>
      <GoodsModal
        visible={visibleGoods}
        setVisible={setVisibleGoods}
        info={info}
        setInfo={setInfo}
      />
      <GoodsModal
        visible={visibleRecommendGoods}
        setVisible={setVisibleRecommendGoods}
        info={recomInfo}
        setInfo={setRecomInfo}
      />
    </View>
  )
}

export default Index
