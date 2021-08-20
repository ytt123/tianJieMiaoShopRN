import React from 'react'
import { View, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import styles from './style'
import useIndex from './useIndex'
import { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora'
import { useNavigation } from '@react-navigation/native'

import Avatar from './Avatar'
import Btn from './Btn'
import GoodsModal from './GoodsModal'
import Speak from './Speak'
import useIndexRTM from './useIndexRTM'
import useIndexGoods from './useIndexGoods'
import AdjustView from './AdjustView'

interface IndexProps {
  route: { params: { goodsinfo: any; shopInfo: any } }
}

const Index: React.FC<IndexProps> = props => {
  const {
    route: {
      params: { goodsinfo, shopInfo },
    },
  } = props

  // const goodsinfo = {
  //   title: '123',
  //   thum: 'https://static.ppzx168.com.cn/60a8765bebaea.png',
  //   pre_begin_time: '2021-05-22 11:11:24',
  //   goods_uuids: ['028ff96b-1e0f-c63f-7cac-cb12a8690403'],
  // }

  // const shopInfo = {
  //   id: 2,
  //   uuid: '72970577-bc5d-a9e6-dcc0-fd452957690e',
  //   type_value: 'NATIONAL',
  //   name: 'ONLY 2',
  //   thum: 'https://static.ppzx168.com.cn/5fcdccc360806.jpg',
  //   imgs: [
  //     'https://static.ppzx168.com.cn/600c29213d6d9.png',
  //     'https://static.ppzx168.com.cn/6006b4bd71425.png',
  //     'https://static.ppzx168.com.cn/6006b4bd442db.png',
  //     ,
  //   ],
  //   mobile: '15580841403',
  //   customer_service_mobile: '18667177085',
  //   shop_province_code: '',
  //   shop_province: '',
  //   province_code: '140000',
  //   province: '山西省',
  //   city_code: '140200',
  //   city: '大同市',
  //   area_code: '140221',
  //   area: '阳高县',
  //   address: '许堡乡111',
  //   longitude: '',
  //   latitude: '',
  //   desc: '<p>111<img src="https://static.ppzx168.com.cn/606436837ce2e.jpg"></p>',
  //   brand_score: '4.50',
  //   service_score: '5.00',
  //   sell_num: 0,
  //   create_by: '13e48913-08dc-da51-2ae2-3d1b7b4310a4',
  //   admin_user: 'a470f61d-4ab0-f2cf-8a2e-218fbfb1a58a',
  //   status: 1,
  //   data_state: 1,
  //   create_time: '2020-08-11 14:15:07',
  //   update_time: '2021-04-26 20:37:39',
  //   is_live: 1,
  //   live_log_uuid: '5fa920d1-ad64-b047-0788-414f4888f212',
  //   shop_live_log_info: {
  //     id: 90,
  //     uuid: '5fa920d1-ad64-b047-0788-414f4888f212',
  //     shop_uuid: '72970577-bc5d-a9e6-dcc0-fd452957690e',
  //     user_uuid: 'a470f61d-4ab0-f2cf-8a2e-218fbfb1a58a',
  //     title: '123',
  //     thum: 'https://static.ppzx168.com.cn/60a8765bebaea.png',
  //     pre_begin_time: '2021-05-22 11:11:24',
  //     begin_time: '2021-05-22 11:11:42',
  //     end_time: null,
  //     goods_uuids: ['028ff96b-1e0f-c63f-7cac-cb12a8690403'],
  //     status: 1,
  //     data_state: 1,
  //     create_time: '2021-05-22 11:11:42',
  //     update_time: '2021-05-22 11:11:42',
  //   },
  // }

  const {
    endCall,
    info: liveInfo,
    BeautyOptions,
    setBeautyOptions,
    isOpenBeauty,
    setIsOpenBeauty,
  } = useIndex(shopInfo)
  const { endRTM, info: RTMinfo, messages } = useIndexRTM(shopInfo)
  const {
    visibleGoods,
    setVisibleGoods,
    info,
    setInfo,
    visibleAdjust,
    setVisibleAdjust,
  } = useIndexGoods(goodsinfo?.goods_uuids)
  const { joinSucceed, peerIds, channelName } = liveInfo
  const { goBack } = useNavigation()

  return (
    <View style={styles.max}>
      <View style={styles.max}>
        {joinSucceed ? (
          <View style={styles.fullView}>
            <RtcLocalView.SurfaceView
              style={styles.max}
              channelId={channelName}
              renderMode={VideoRenderMode.Hidden}
            />
          </View>
        ) : null}
      </View>
      <Avatar />
      <Btn
        setVisibleAdjust={setVisibleAdjust}
        add={() => setVisibleGoods(true)}
        close={() => {
          endCall()
          endRTM()
          setTimeout(() => {
            goBack()
          }, 1000)
        }}
      />
      <Speak messages={messages} />

      <GoodsModal
        visible={visibleGoods}
        setVisible={setVisibleGoods}
        info={info}
        setInfo={setInfo}
        allInfo={goodsinfo}
        live_log_uuid={shopInfo?.live_log_uuid}
      />
      <AdjustView
        visible={visibleAdjust}
        setVisible={setVisibleAdjust}
        BeautyOptions={BeautyOptions}
        setBeautyOptions={setBeautyOptions}
        isOpenBeauty={isOpenBeauty}
        setIsOpenBeauty={setIsOpenBeauty}
      />
    </View>
  )
}

export default Index