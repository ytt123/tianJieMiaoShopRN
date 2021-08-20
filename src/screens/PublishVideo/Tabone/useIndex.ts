import { useState, useCallback, useEffect } from 'react'
import { ajax, url } from '../../../api'
import { Toast } from '@ant-design/react-native'
import { useNavigation } from '@react-navigation/native'
import { useActionSheet } from '@expo/react-native-action-sheet'
import useSpinner from '../../../utils/hooks/useSpinner'
import mainScreenConfig from '../../../config/mainScreen.config'
import { qiniuFileUpload } from '../../../utils/file'
import { showImagePicker } from '../../../utils/fs/imageSelect'
import useUser from '../../../utils/hooks/useUser'

import { LiveReviewStatus } from '../../../constants/live.constants'
const useIndex = () => {
  const [isFormal, setIsFormal] = useState<any>(false)
  const navigation = useNavigation()
  const { navigate } = navigation
  const [info, setInfo] = useState<any>([])
  const [title, setTitle] = useState<any>('')
  const [thum, setThum] = useState<any>('https://static.ppzx168.com.cn/611f5a6db1422.png')
  // const [thum, setThum] = useState<any>('')
  const [pre_begin_time, setPre_begin_time] = useState<any>('')

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
    if (isFormal) {
      if (!title) {
        Toast.show('请输入直播标题')
        return
      }
      if (!thum) {
        Toast.show('请上传直播封面')
        return
      }
      if (!pre_begin_time) {
        Toast.show('请设置预约直播时间')
        return
      }
      if (info.length === 0) {
        Toast.show('还未选择带货商品')
        return
      }
      spinningChange(true)

      try {
        //申请直播
        const applyres = await ajax({
          url: url.agentLiveApplysCreate,
          data: {
            agent_uuid: agentUuid,
            title,
            thum,
            begin_time: pre_begin_time,
            goods_uuids: info.map((item: any) => item?.order_goods_uuid),
          },
        })
        console.log('审核结果', JSON.stringify(applyres, null, 2))
        // if(   applyres.data.status  === LiveReviewStatus.)
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
        navigate(mainScreenConfig.VideoLive.name, {
          shopInfo: shopReadData?.data,
          goodsinfo: {
            title,
            thum,
            pre_begin_time,
            goods_uuids: info.map((item: any) => item?.order_goods_uuid),
          },
        })
      } catch (err) {
        spinningChange(false)
      }
    } else {
      navigate(mainScreenConfig.TryVideoLive.name, {})
    }
  }, [agentUuid, info, isFormal, navigate, pre_begin_time, spinningChange, thum, title])

  return {
    submit,
    isFormal,
    setIsFormal,
    info,
    setInfo,
    addClick,
    thum,
    setThum,
    title,
    setTitle,
    pre_begin_time,
    setPre_begin_time,
  }
}

export default useIndex
