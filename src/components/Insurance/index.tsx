import React, { useEffect, useState } from 'react'
import { Modal } from '@ant-design/react-native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import style from './style'

interface IndexProps {
  ishow: any
}
const Index: React.FC<IndexProps> = props => {
  const { ishow } = props

  const [value, setValue] = useState(ishow)
  useEffect(() => {
    setTimeout(() => {
      setValue(value)
    }, 2000)
  }, [value])

  return (
    <View>
      <Modal
        transparent
        maskClosable
        visible={value}
        onClose={() => {
          setValue(false)
        }}
      >
        <View>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('./icon.png')} style={style.icon} />
          </View>
          <Text style={style.title}>医美有风险，求美需谨慎</Text>
          <Text style={style.des}>
            本站仅支持18岁以上的成年人购买医疗美容服务，请确认您资料填写的真实性。
          </Text>
          <View style={style.boms}>
            <TouchableOpacity
              onPress={() => {
                setValue(false)
              }}
            >
              <Text style={style.btnsText}>确认</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Index
