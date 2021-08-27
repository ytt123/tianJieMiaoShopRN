import { useCallback } from 'react'

import * as WeChat from 'react-native-wechat-lib'
const useIndex = () => {
  const urlStr = 'http://ff.pincll.net/dbu7'

  const shareType = useCallback((type = 0) => {
    WeChat.shareWebpage({
      title: '天街喵',
      webpageUrl: urlStr,
      scene: type,
    })
  }, [])

  return { urlStr, shareType }
}

export default useIndex
