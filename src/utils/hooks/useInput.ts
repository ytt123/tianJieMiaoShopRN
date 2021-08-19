import { useCallback, useState } from 'react'
const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue)

  const onChangeText = useCallback((value: string) => {
    setValue(value)
  }, [])

  return {
    value,
    onChangeText,
  }
}
export default useInput
