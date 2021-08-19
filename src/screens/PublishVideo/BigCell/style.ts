import { StyleSheet } from 'react-native'
import { color000 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    marginHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  centerfont: { flex: 1, marginLeft: 5 },
  tipDesText: { fontSize: 12, lineHeight: 17, color: '#999' },
  items: {
    // height: 42,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  titleText: { fontSize: 14, lineHeight: 22, color: '#000' },
  desText: { fontSize: 12, lineHeight: 22, color: '#666' },
  icon2: { fontSize: 16, color: '#999' },
  icon1: {
    fontSize: 16,
    color: '#FF2442',
  },
})

export default style
