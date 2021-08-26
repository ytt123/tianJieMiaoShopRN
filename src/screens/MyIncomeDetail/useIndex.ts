import { useState, useCallback } from 'react'
import { useActionSheet } from '@expo/react-native-action-sheet'

import useUser from '../../utils/hooks/useUser'

const useIndex = () => {
  const { user_type } = useUser()
  let arr = []
  let tindex = 0
  console.log('user_typeuser_typeuser_type', user_type)
  if (user_type === 'AGENT_ADMIN') {
    tindex = 6
    arr = [
      { title: '全部', type_value: '' },
      { title: '商家充值', type_value: 'SHOP_RECHARGE' },
      { title: '商家扣减', type_value: 'SHOP_DEDUCTION' },
      { title: '发货收益', type_value: 'EXPRESS_COMMISSION' },
      { title: '提现', type_value: 'USER_DRAWCASH_APPLY' },
      { title: '提现驳回', type_value: 'USER_DRAWCASH_NO_PASS' },
    ]
  } else if (user_type === 'SHOP_ADMIN') {
    tindex = 7
    arr = [
      { title: '全部', type_value: '' },
      { title: '商家充值', type_value: 'SHOP_RECHARGE' },
      { title: '商家扣减', type_value: 'SHOP_DEDUCTION' },
      { title: '商家抽成', type_value: 'SHOP_COMMISSION' },
      { title: '发货收益', type_value: 'EXPRESS_COMMISSION' },
      { title: '提现', type_value: 'USER_DRAWCASH_APPLY' },
      { title: '提现驳回', type_value: 'USER_DRAWCASH_NO_PASS' },
    ]
  }
  const { showActionSheetWithOptions } = useActionSheet()
  const [type, setType] = useState<any>({})
  const [typeValue, setTypeValue] = useState<any>('全部')

  const select = useCallback(() => {
    showActionSheetWithOptions(
      {
        options: arr.map(item => item.title).concat(['取消']),
        cancelButtonIndex: tindex,
      },
      index => {
        if (index < tindex) {
          setType(arr[index]?.type_value ? { type_value: arr[index]?.type_value } : {})
          setTypeValue(arr[index]?.title)
        }
      },
    )
  }, [arr, showActionSheetWithOptions, tindex])

  return {
    select,
    type,
    typeValue,
  }
}
export default useIndex
