import { useCallback, useState, useEffect } from 'react'
import { ajax, url } from '../../api'
import useSpinner from '../../utils/hooks/useSpinner'
const useIndex = () => {
  const { spinningChange } = useSpinner()
  const [list, setList] = useState<any[]>([])
  const [refresing, setRefresing] = useState<boolean>(false)
  const getListData = useCallback(() => {
    spinningChange(true)
    ajax({
      url: url.payGoodsList,
    })
      .then(res => {
        spinningChange(false)
        setList(res?.data)
      })
      .catch(err => {
        spinningChange(false)
      })
  }, [spinningChange])

  useEffect(() => {
    getListData()
  }, [getListData])
  const onRefresh = useCallback(() => {
    setRefresing(true)

    ajax({
      url: url.payGoodsSpecList,
    })
      .then(res => {
        setRefresing(false)
        setList(res?.data)
      })
      .catch(err => {
        setRefresing(false)
      })
  }, [])
  return { list, refresing, onRefresh }
}
export default useIndex
