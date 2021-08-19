import { useState, useCallback, useEffect } from 'react'
import { Toast } from '@ant-design/react-native'
import { MOBILE } from '../regexp'
import { ajax, url } from '../../api'

let intervalTime = 0
/**
 * 发送验证码
 * @param {object} options
 */
const useCodeSend = () => {
  const [codeLoading, setCodeLoading] = useState(false)
  const [sendMsg, setSendMsg] = useState('获取验证码')
  const [canSend, setCanSend] = useState(true)

  const codeSend = useCallback(
    mobile => {
      if (!MOBILE.test(mobile)) {
        Toast.show('请输入正确的手机号')
        return
      }
      if (!codeLoading && canSend) {
        setCanSend(false)
        setCodeLoading(true)
        ajax({
          url: url.codeSendWithMobile,
          data: {
            mobile,
          },
          codeZeroCatch: undefined,
        })
          .then(res => {
            const { msg = '' } = res
            Toast.show(msg)
            let count = 60
            setCodeLoading(false)
            intervalTime = setInterval(() => {
              count--
              if (count === 0) {
                clearInterval(intervalTime)
                setSendMsg('重新发送')
                setCanSend(true)
              } else {
                setSendMsg(`已发送 ${count}`)
              }
            }, 1000)
          })
          .catch(err => {
            setSendMsg('发送验证码')
            setCodeLoading(false)
            setCanSend(true)
          })
      }
    },
    [canSend, codeLoading],
  )

  useEffect(() => {
    return () => {
      clearInterval(intervalTime)
    }
  }, [])

  return {
    codeLoading,
    sendMsg,
    codeSend,
  }
}

export default useCodeSend
