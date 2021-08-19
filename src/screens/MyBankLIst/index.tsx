import React from 'react'
import { View, Text, TextInput, SafeAreaView, ScrollView } from 'react-native'
import style from './style'
import { Touchable } from '../../components'
import { placeholderColor } from '../../config/style.config'
import useIndex from './useIndex'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const { submit, info, setInfo } = useIndex()
  const { bank_name, sub_bank_name, card_holder, card_number, uuid } = info || {}
  return (
    <SafeAreaView style={style.safe}>
      <ScrollView style={style.wrapper}>
        <View style={style.line}>
          <View style={style.left}>
            <Text style={style.titleText}>开户银行</Text>
          </View>
          <TextInput
            style={style.textInput}
            placeholder="请输入开户银行"
            value={bank_name}
            onChangeText={text => {
              setInfo((pre: any) => ({ ...pre, bank_name: text }))
            }}
            placeholderTextColor={placeholderColor}
          />
        </View>
        <View style={style.line}>
          <View style={style.left}>
            <Text style={style.titleText}>支行名称</Text>
          </View>
          <TextInput
            style={style.textInput}
            placeholder="请输入支行名称"
            value={sub_bank_name}
            onChangeText={text => {
              setInfo((pre: any) => ({ ...pre, sub_bank_name: text }))
            }}
            placeholderTextColor={placeholderColor}
          />
        </View>
        <View style={style.line}>
          <View style={style.left}>
            <Text style={style.titleText}>持卡人姓名</Text>
          </View>

          <TextInput
            style={style.textInput}
            placeholder="请输入持卡人姓名"
            value={card_holder}
            onChangeText={text => {
              setInfo((pre: any) => ({ ...pre, card_holder: text }))
            }}
            placeholderTextColor={placeholderColor}
          />
        </View>
        <View style={style.line}>
          <View style={style.left}>
            <Text style={style.titleText}>银行卡号</Text>
          </View>
          <TextInput
            style={style.textInput}
            placeholder="请输入银行卡号"
            value={card_number}
            onChangeText={text => {
              setInfo((pre: any) => ({ ...pre, card_number: text }))
            }}
            placeholderTextColor={placeholderColor}
          />
        </View>
      </ScrollView>
      <Touchable style={style.btn} onPress={submit}>
        {/* <Text style={style.btnText}>{uuid ? '更新' : '保存'}</Text> */}
        <Text style={style.btnText}>{'保存'}</Text>
      </Touchable>
    </SafeAreaView>
  )
}

export default Index
