import { Toast } from '@ant-design/react-native'
import { useCallback } from 'react'
import { ajax, url } from '../../../api'
const useIndex = (data: any, onRefresh: any) => {
  const { uuid: video_uuid, user_uuid } = data || {}
  const commentClick = useCallback(
    (content: string) => {
      ajax({
        url: url.videoCommentsCreate,
        data: { type_value: 'VIDEO', video_uuid, content, reply_user_uuid: user_uuid },
      })
        .then(res => {
          Toast.show(res?.msg)
          onRefresh()
        })
        .catch(err => {})
    },
    [onRefresh, user_uuid, video_uuid],
  )

  return { commentClick }
}
export default useIndex
