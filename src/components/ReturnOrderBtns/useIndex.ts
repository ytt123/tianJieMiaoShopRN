import { useCallback } from 'react'
import { ajax, url } from '../../api'
import useSpinner from '../../utils/hooks/useSpinner'
const useIndex = (return_order_no: string, dataChange: any) => {
  const { spinningChange } = useSpinner()
  const refund = useCallback(
    (type: string) => {
      let data = {}
      switch (type) {
        case 'refund':
          data = { return_order_no, coordinate: '#N-3-1#' }
          break
        case 'examineTrue':
          data = { return_order_no, coordinate: '#N-1-3#' }
          break
        case 'examineFalse':
          data = { return_order_no, coordinate: '#N-1-2#' }
          break
        case 'examineGooodsTrue':
          data = { return_order_no, coordinate: '#N-2-3#' }
          break
        case 'examineGooodsFalse':
          data = { return_order_no, coordinate: '#N-2-2#' }
          break
        case 'receiving':
          data = { return_order_no, coordinate: '#N-2-6#' }
          break
        case 'refuseReceiving':
          data = { return_order_no, coordinate: '#N-2-5#' }
          break

        default:
          break
      }

      spinningChange(true)
      ajax({
        url: url.returnOrdersOperate,
        data,
      })
        .then(res => {
          const { data } = res
          spinningChange(false)

          dataChange(data)
        })
        .catch(err => {
          spinningChange(false)
        })
    },
    [dataChange, return_order_no, spinningChange],
  )

  return { refund }
}
export default useIndex
