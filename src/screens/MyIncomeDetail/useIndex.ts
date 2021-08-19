import { useState, useCallback } from 'react'
import { useActionSheet } from '@expo/react-native-action-sheet'
const arr = [
  { title: '全部', type_value: '' },
  { title: '商家充值', type_value: 'SHOP_RECHARGE' },
  { title: '商家扣减', type_value: 'SHOP_DEDUCTION' },
  { title: '店铺抽成', type_value: 'SHOP_COMMISSION' },
  { title: '发货收益', type_value: 'EXPRESS_COMMISSION' },
  { title: '提现', type_value: 'USER_DRAWCASH_APPLY' },
  { title: '提现驳回', type_value: 'USER_DRAWCASH_NO_PASS' },
]
const useIndex = () => {
  const { showActionSheetWithOptions } = useActionSheet()
  const [type, setType] = useState<any>({})
  const [typeValue, setTypeValue] = useState<any>('全部')
  const select = useCallback(() => {
    showActionSheetWithOptions(
      {
        options: arr.map(item => item.title).concat(['取消']),
        cancelButtonIndex: 4,
      },
      index => {
        if (index < 4) {
          setType(arr[index]?.type_value ? { type_value: arr[index]?.type_value } : {})
          setTypeValue(arr[index]?.title)
        }
      },
    )
  }, [showActionSheetWithOptions])

  return {
    select,
    type,
    typeValue,
  }
}
export default useIndex
