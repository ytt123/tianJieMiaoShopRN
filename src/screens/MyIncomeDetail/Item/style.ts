import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, wrapperBg } from '../../../config/style.config'

export const dotWidth = 1
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  left: {
    height: 70,
    justifyContent: 'space-around',
  },
  titleText: { fontSize: 14, color: color000 },
  timeText: { fontSize: 12, color: '#898989' },
  numText: { fontSize: 16, color: color000 },
  num1Text: {
    fontSize: 16,
    color: btnPrimaryColor,
  },
})

export default style
