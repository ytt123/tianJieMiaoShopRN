import React, { useEffect, useState, useCallback } from 'react'

import Modal from 'react-native-modal'
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import style from './style'
import useUser from '../../utils/hooks/useUser'
import { ajax, url } from '../../api'
import { Toast } from '@ant-design/react-native'

interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const [value, setValue] = useState(false)
  const { userOnline } = useUser()
  const [data, setData] = useState<any>({ coupon_list: [], is_new: 0 })
  const getlist = useCallback(() => {
    ajax({ url: url.userCouponsnewbie, data: {} })
      .then(res => {
        setData(res?.data)
        res?.data?.is_new &&
          setTimeout(() => {
            setValue(true)
          }, 2000)
      })
      .catch(err => {})
  }, [])
  const submit = useCallback(() => {
    const arr = data?.coupon_list.map((item: any, index: number) => {
      return item.uuid
    })

    ajax({ url: url.userCouponsdraw, data: { coupon_uuids: arr } })
      .then(res => {
        Toast.show(res?.msg)
      })
      .catch(err => {})
  }, [data])
  useEffect(() => {
    if (userOnline) {
      getlist()
    }
  }, [getlist, userOnline])

  return (
    <View>
      <Modal isVisible={value}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#ED7E90', '#E97184', '#E46377']}
            style={{ borderRadius: 8, width: 300 }}
          >
            <View>
              <View>
                <Text style={style.topText}>恭喜你获得{data?.coupon_list?.length}张优惠券</Text>
                <ScrollView style={{ height: 300, width: 300 }}>
                  {data?.coupon_list.map((item: any, index: number) => {
                    const {
                      preferential_type_value,
                      preferential_value,
                      use_time_type_value,
                      use_time_begin,
                      use_time_end,
                      use_time_limit_day_num_in_get_after,
                      preferential_content,
                    } = item
                    return (
                      <ImageBackground
                        key={index}
                        style={{ height: 65, width: 270, marginBottom: 6, marginLeft: 15 }}
                        source={
                          index % 3 === 0
                            ? require('./coupons1.png')
                            : index % 3 === 1
                            ? require('./coupons2.png')
                            : require('./coupons3.png')
                        }
                      >
                        <View style={{ flexDirection: 'row' }}>
                          <View
                            style={{
                              height: 65,
                              width: 80,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Text style={style.priceText}>
                              {preferential_type_value === 'DISCOUNT'
                                ? preferential_value + '折'
                                : '￥' + preferential_value}
                            </Text>
                          </View>

                          <View style={{ justifyContent: 'center' }}>
                            <Text style={style.contentText}>{preferential_content}</Text>

                            <Text style={style.timeText}>
                              {use_time_type_value === 'DAY_NUM'
                                ? `领取${use_time_limit_day_num_in_get_after}后天内有效`
                                : `${use_time_begin.split(' ')[0]}~${use_time_end.split(' ')[0]}`}
                            </Text>
                          </View>
                        </View>
                      </ImageBackground>
                    )
                  })}
                </ScrollView>
              </View>
              <View style={style.boms}>
                <TouchableOpacity
                  onPress={() => {
                    setValue(false)
                    submit()
                  }}
                >
                  <Text style={style.btnsText}>一键领取</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

          <View style={{ width: 336, position: 'absolute', top: -60 }}>
            <TouchableOpacity
              onPress={() => {
                setValue(false)
              }}
            >
              <Image source={require('./cancel.png')} style={style.cancel} />
            </TouchableOpacity>

            <Image source={require('./top.png')} style={style.icon} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Index
