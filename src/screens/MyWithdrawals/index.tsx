import React from 'react'
import { View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style'
import { placeholderColor } from '../../config/style.config'
import useIndex from './useIndex'
import { GOODSNUM } from '../../utils/regexp'
import { Iconfont, Touchable } from '../../components'
interface IndexProps {
  route: { params: { money: any } }
}
const Index: React.FC<IndexProps> = props => {
  const {
    route: {
      params: { money },
    },
  } = props
  const { withDrawClick, number, setNumber, bankCardInfo, goBank } = useIndex()
  const { uuid = '', bank_name = '', sub_bank_name = '', card_holder = '', card_number = '' } =
    bankCardInfo || {}
  return (
    <SafeAreaView style={style.safe}>
      <ScrollView style={style.wrapper}>
        {uuid ? (
          <View style={style.top1Wrap}>
            <Text style={style.titleText}>到账银行卡 </Text>
            <View style={style.topRight}>
              <Text style={style.titleText}>{bank_name} </Text>
              <Text style={style.bankText}>{sub_bank_name} </Text>
              <Text style={style.titleText}>
                {card_holder}-{card_number}
              </Text>
            </View>
            <View />
          </View>
        ) : (
          <Touchable style={style.topWrap} onPress={goBank}>
            <Text style={style.titleText}>请先绑定您的银行卡账户</Text>
            <Iconfont iconfont={'\ue6a3'} style={style.icon} />
          </Touchable>
        )}

        <View style={style.inputContain}>
          <Text style={style.titleText}>提现金额</Text>
          <View style={style.inputWrap}>
            <Text style={style.tag}>￥</Text>
            <TextInput
              style={style.input}
              placeholder="请输入提现金额"
              // value={number}
              onChangeText={text => {
                const t = text.trim()
                if (GOODSNUM.test(t)) {
                  setNumber(t)
                }
              }}
              keyboardType="number-pad"
              autoFocus
              placeholderTextColor={placeholderColor}
            />
          </View>
          <Text style={[style.title1Text]}>
            注：当前可提现{money}
            元（发起提现日为每月10号、20号、30号；到账时间为发起提现后的5个工作日内、请注意查收.）
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={withDrawClick} style={style.btn}>
        <Text style={style.btnText}> 确认提现</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Index
