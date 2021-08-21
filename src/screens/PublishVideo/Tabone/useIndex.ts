import { useState, useCallback } from 'react'
import { ajax, url } from '../../../api'
import { Toast } from '@ant-design/react-native'
import { useNavigation } from '@react-navigation/native'
import useSpinner from '../../../utils/hooks/useSpinner'
import mainScreenConfig from '../../../config/mainScreen.config'
import { qiniuFileUpload } from '../../../utils/file'
import { showImagePicker } from '../../../utils/fs/imageSelect'
import useUser from '../../../utils/hooks/useUser'
import { LiveReviewStatus, ShopUserType } from '../../../constants/live.constants'
import { grshow } from '../../../utils/grToast'
import { shopInfo, goodsinfo } from './mockData'
const useIndex = () => {
  const [isFormal, setIsFormal] = useState<any>(false)
  const navigation = useNavigation()
  const { navigate } = navigation
  const [info, setInfo] = useState<any>([])
  const [recomInfo, setRecomInfo] = useState<any>([])
  const [title, setTitle] = useState<any>('')
  const [thum, setThum] = useState<any>('https://static.ppzx168.com.cn/611f5a6db1422.png')
  // const [thum, setThum] = useState<any>('')
  const [pre_begin_time, setPre_begin_time] = useState<any>('')
  const [isPredictLive, setIsPredictLive] = useState<any>('')
  const [predictTime, setPredictTime] = useState<any>('')

  const { shopUuid, user_type, agentUuid } = useUser()

  const { spinningChange } = useSpinner()

  const addClick = useCallback(async () => {
    const imageRes = await showImagePicker('photo')
    spinningChange(true)
    const avatarRes = await qiniuFileUpload(imageRes, shopUuid)
    spinningChange(false)

    setThum(avatarRes?.url)
  }, [shopUuid, spinningChange])

  const submit = useCallback(async () => {
    const routeurl = isFormal ? mainScreenConfig.VideoLive.name : mainScreenConfig.TryVideoLive.name
    navigate(routeurl, {
      shopInfo,
      goodsinfo,
    })

    /**
  // if (isFormal) {
    if (!title) {
      grshow('请输入直播标题')
      return
    }
    if (!thum) {
      grshow('请上传直播封面')
      return
    }
    if (!pre_begin_time) {
      grshow('请设置预约直播时间')
      return
    }
    if (info.length === 0) {
      grshow('请添加商品')
      return
    }

    if (recomInfo.length === 0) {
      grshow('请添加推荐商品')
      return
    }

    spinningChange(true)

    try {
      // 商家
      if (user_type === ShopUserType.SHOP) {
        //店铺没有添加审核逻辑
      } else if (user_type === ShopUserType.AGENT_ADMIN) {
        const data = {
          agent_uuid: agentUuid,
          title,
          thum,
          begin_time: pre_begin_time,
          is_predict_live: isPredictLive,
          predict_time: predictTime,
          goods_uuids: info.map((item: any) => item?.order_goods_uuid),
          recommend_goods_uuids: recomInfo.map((item: any) => item?.order_goods_uuid),
        }
        console.log('paramsparamsparamsparams', JSON.stringify(data, null, 2))
        //申请直播
        const applyres = await ajax({
          url: url.agentLiveApplysCreate,
          data,
        })
        console.log('审核结果', JSON.stringify(applyres, null, 2))

        //平台审核未通过
        if (applyres.data.status !== LiveReviewStatus.PLATFORMREVIEW) {
          Toast.show('平台未审核通过')
          spinningChange(false)
          return
        } else {
          spinningChange(false)
        }
      }

      //other
      await ajax({ url: url.shopLiveLogsEnd })
      await ajax({
        url: url.shopLiveLogsStart,
        data: {
          title,
          thum,
          pre_begin_time,
          goods_uuids: info.map((item: any) => item?.order_goods_uuid),
        },
      })
      const shopReadData = await ajax({
        url: url.shopsRead,
        data: {
          full_fields: ['shop_live_log_info'],
        },
      })
      spinningChange(false)

      const routeurl = isFormal
        ? mainScreenConfig.VideoLive.name
        : mainScreenConfig.TryVideoLive.name
      navigate(routeurl, {
        shopInfo: shopReadData?.data,
        goodsinfo: {
          title,
          thum,
          pre_begin_time,
          goods_uuids: info.map((item: any) => item?.order_goods_uuid),
          recomgoods_uuids: recomInfo.map((item: any) => item?.order_goods_uuid),
          recomgoods: recomInfo,
        },
      })
    } catch (err) {
      spinningChange(false)
    }
    // }
    //  else {
    //   navigate(mainScreenConfig.TryVideoLive.name, {})
    // }
     */
  }, [isFormal, navigate])

  return {
    submit,
    isFormal,
    setIsFormal,
    info,
    setInfo,
    recomInfo,
    setRecomInfo,
    addClick,
    thum,
    setThum,
    title,
    setTitle,
    pre_begin_time,
    setPre_begin_time,
    isPredictLive,
    setIsPredictLive,
    predictTime,
    setPredictTime,
  }
}

export default useIndex
