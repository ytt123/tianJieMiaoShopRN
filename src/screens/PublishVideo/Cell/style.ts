import { StyleSheet } from 'react-native'
import { lineColor } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    marginHorizontal: 18,
    borderColor: lineColor,
    borderBottomWidth: 1,
  },
  tipDesText: { fontSize: 12, lineHeight: 17, color: '#999' },
  items: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: { fontSize: 14, lineHeight: 22, color: '#000' },
  icon2: { fontSize: 16, color: '#999' },
  icon1: {
    fontSize: 16,
    color: '#FF2442',
  },
})

export default style
