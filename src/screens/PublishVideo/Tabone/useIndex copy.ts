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
const useIndex = () => {
  const [isFormal, setIsFormal] = useState<any>(false)
  const navigation = useNavigation()
  const { navigate } = navigation
  const [info, setInfo] = useState<any>([])
  const [title, setTitle] = useState<any>('')
  const [thum, setThum] = useState<any>('')
  const [pre_begin_time, setPre_begin_time] = useState<any>('')

  const { shopUuid } = useUser()
  // const [shopInfo, setShopInfo] = useState<any>({})
  const { spinningChange } = useSpinner()
  const addClick = useCallback(async () => {
    const imageRes = await showImagePicker('photo')
    spinningChange(true)
    const avatarRes = await qiniuFileUpload(imageRes, shopUuid)
    spinningChange(false)

    setThum(avatarRes?.url)
  }, [shopUuid, spinningChange])

  // useEffect(() => {
  //   spinningChange(true)
  //   ajax({
  //     url: url.shopsRead,
  //     data: {
  //       full_fields: ['shop_live_log_info'],
  //     },
  //   })
  //     .then(res => {
  //       spinningChange(false)
  //       console.log('123123123--------', JSON.stringify(res, null, 2))
  //       setShopInfo(res?.data)
  //     })
  //     .catch(error => {
  //       spinningChange(false)
  //     })
  // }, [spinningChange])
  const submit = useCallback(() => {
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
      ajax({
        url: url.shopLiveLogsStart,
        data: {
          title,
          thum,
          pre_begin_time,
          goods_uuids: info.map((item: any) => item?.order_goods_uuid),
        },
      })
        .then(res => {
          ajax({
            url: url.shopsRead,
            data: {
              full_fields: ['shop_live_log_info'],
            },
          })
            .then(async res => {
              spinningChange(false)

              //增加是否下播的判断

              if (res?.data?.is_live) {
                //先关闭之前的直播

                const closedata = await ajax({ url: url.shopLiveLogsEnd })
                console.log('123123', JSON.stringify(closedata, null, 2))
              }

              navigate(mainScreenConfig.VideoLive.name, {
                shopInfo: res?.data,
                goodsinfo: {
                  title,
                  thum,
                  pre_begin_time,
                  goods_uuids: info.map((item: any) => item?.order_goods_uuid),
                },
              })
            })
            .catch(error => {
              spinningChange(false)
            })
        })
        .catch(error => {
          spinningChange(false)
        })
    } else {
      navigate(mainScreenConfig.TryVideoLive.name, {})
    }
  }, [info, isFormal, navigate, pre_begin_time, spinningChange, thum, title])

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
