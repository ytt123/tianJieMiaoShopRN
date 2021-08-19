import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { action } from '../../store/initialReducer'

const useSpinner = () => {
  const dispatch = useDispatch()

  const spinningChange = useCallback(
    (spinning: boolean) => {
      dispatch(action.spinningChange(spinning))
    },
    [dispatch],
  )

  return {
    spinningChange,
  }
}

export default useSpinner
