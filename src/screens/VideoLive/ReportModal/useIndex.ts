import { useCallback, useState, useEffect, useRef } from 'react'
import { url, ajax } from '../../../api'
import useSpinner from '../../../utils/hooks/useSpinner'
const useIndex = (allInfo: any, info: any[], live_log_uuid) => {
  const { spinningChange } = useSpinner()
  const update = useCallback(() => {
    spinningChange(true)
    ajax({
      url: url.shopLiveLogsUpdate,
      data: { ...allInfo, goods_uuids: info, uuid: live_log_uuid },
    })
      .then(res => {
        console.log('更新成功')
        spinningChange(false)
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [allInfo, info, live_log_uuid, spinningChange])
  return { update }
}

export default useIndex
