import { useSelector } from 'react-redux'

const useDeviceInfo = () => {
  const fontScale = useSelector<any, number>(state => state.getIn(['init', 'fontScale']))

  return {
    fontScale,
  }
}

export default useDeviceInfo
