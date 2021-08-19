import { useState, useEffect } from 'react'
import { ajax, url } from '../../api'
import useSpinner from '../../utils/hooks/useSpinner'

const useIndex = () => {
  const [info, setInfo] = useState<any>({})
  const { spinningChange } = useSpinner()
  useEffect(() => {
    spinningChange(true)
    ajax({ url: url.commissionLogsCount, data: {} })
      .then(res => {
        setInfo(res?.data)
        spinningChange(false)
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [spinningChange])

  return { info }
}

export default useIndex
