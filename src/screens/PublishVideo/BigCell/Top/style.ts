import { StyleSheet } from 'react-native'
import { color000 } from '../../../../config/style.config'
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
    textAlign: 'right',
    fontSize: 12,
    color: '#999',
    height: 50,
    width: 80,
    lineHeight: 50,
  },
})

export default style
