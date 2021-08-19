import { StyleSheet } from 'react-native'
import { color000 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 2,
  },
  item: { flexDirection: 'row' },

  icon: {
    fontSize: 12,
    color: color000,
    marginTop: 1,
  },
  icon1: { fontSize: 16, color: color000 },
  titleText: {
    fontSize: 14,
    color: color000,
    paddingHorizontal: 5,
  },
})

export default style
