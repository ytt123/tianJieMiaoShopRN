import { useCallback, useState } from 'react'
import { url, ajax } from '../../../api'
import useSpinner from '../../../utils/hooks/useSpinner'
const useIndex = (info: any) => {
  const { spinningChange } = useSpinner()
  const [desc, setDesc] = useState<any>('')

  const [imgs, setImgs] = useState<any[]>([])
  const sumbit = useCallback(() => {
    const data = {
      shop_uuid: info?.shop_live_log_info?.shop_uuid,
      shop_live_log_uuid: info?.live_log_uuid,
      content: desc,
      sort: '', //todo
      // img: imgs,
      img: ['https://static.ppzx168.com.cn/611b60f150a6b.png'],
    }
    console.log('params', JSON.stringify(data, null, 2))
    spinningChange(true)
    ajax({
      url: url.shopLiveReportscreate,
      data,
    })
      .then(res => {
        spinningChange(false)
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [desc, info.live_log_uuid, info.shop_live_log_info.shop_uuid, spinningChange])
  return { sumbit, desc, setDesc, setImgs }
}

export default useIndex
