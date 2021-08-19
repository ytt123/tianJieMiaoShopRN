import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { actionUser } from '../../store/initialReducer'

const useRedux = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const logout = useCallback(() => {
    dispatch(actionUser.logout(navigation))
  }, [dispatch, navigation])
  return {
    logout,
  }
}
export default useRedux
