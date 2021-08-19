import { useCallback } from 'react'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../../../api'
import useSpinner from '../../../../utils/hooks/useSpinner'
const useIndex = (data: any) => {
  const { spinningChange } = useSpinner()
  const noGoodsClick = useCallback(
    (order_no, dataChange) => {
      spinningChange(true)
      ajax({
        url: url.ordersDeliveryOff,
        data: {
          order_no,
        },
      })
        .then(res => {
          spinningChange(false)
          const { data } = res
          dataChange()
          Toast.show(res?.msg)
        })
        .catch(() => {
          spinningChange(false)
        })
    },
    [spinningChange],
  )
  const sendClick = useCallback(
    (order_no, dataChange) => {
      spinningChange(true)
      ajax({
        url: url.ordersOperate,
        data: {
          order_no,
          coordinate: '#Y-1-7#',
          deliver_goods_way: '',
          //todo
        },
      })
        .then(res => {
          spinningChange(false)
          const { data } = res

          dataChange()
          Toast.show(res?.msg)
        })
        .catch(() => {
          spinningChange(false)
        })
    },
    [spinningChange],
  )

  return { noGoodsClick, sendClick }
}

export default useIndex
