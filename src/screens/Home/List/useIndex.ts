import { useCallback, useState, useEffect } from 'react'
import { ajax, url } from '../../../api'

const useIndex = () => {
  const [shops, setShops] = useState<any[]>([])

  const getShopList = useCallback(() => {
    ajax({
      url: url.homeShopsList,
      data: { full_fields: ['shop_info'], page: { page_num: 1, page_limit: 8 } },
    })
      .then(res => {
        const { data } = res
        setShops(data)
      })
      .catch(err => {})
  }, [])

  useEffect(() => {
    getShopList()
  }, [getShopList])

  return { shops, setShops }
}
export default useIndex
