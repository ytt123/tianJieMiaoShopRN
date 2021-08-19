import { StyleSheet } from 'react-native'
import { color000 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {},
  item: { flexDirection: 'row' },
  icon: {
    fontSize: 12,
    color: color000,
    marginTop: 1,
  },
  icon1: { fontSize: 16, color: color000 },
  titleText: {
    // backgroundColor: 'red',
    fontSize: 12,
    color: '#999',
    // paddingHorizontal: 5,
    height: '100%',
    width: 300,
    lineHeight: 40,
  },
})

export default style
