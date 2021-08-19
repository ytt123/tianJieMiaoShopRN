import { useCallback, useState } from 'react'
const defaultObj = { id_str: '', stock: 0, thum: '', sell_price: 0, isover: false }
const useSpec = (data: any, seleData?: any) => {
  const { spec_info = [], spec_group_info = [] } = data
  const { content = [] } = spec_info || {}
  const defaults = Array(content.length).fill(0).join('_')
  const [updateInfo, setUpdataInfo] = useState<any>({
    ...defaultObj,
    titles: defaults,
    ...seleData,
  })
  const itemClick = useCallback(
    (index, name) => {
      const { titles } = updateInfo
      const arr = [...titles.split('_')]
      if (arr[index] === name) {
        // 同一个点击
        arr.splice(index, 1, '0')
      } else {
        arr.splice(index, 1, name)
      }
      const value = arr.join('_')
      setUpdataInfo((pre: any) => ({ ...pre, titles: value }))
      const specGroups = <any>[]
      spec_group_info.map((item: any) => {
        const { spec_group_option, id_str, thum, stock, sell_price } = item || {}
        specGroups.push(spec_group_option)
        if (spec_group_option === value) {
          setUpdataInfo((pre: any) => ({ ...pre, id_str, stock, thum, sell_price, isover: true }))
        }
      })
      if (specGroups.indexOf(value) === -1) {
        setUpdataInfo((pre: any) => ({ ...pre, ...defaultObj }))
      }
    },
    [spec_group_info, updateInfo],
  )

  return { updateInfo, itemClick }
}
export default useSpec
