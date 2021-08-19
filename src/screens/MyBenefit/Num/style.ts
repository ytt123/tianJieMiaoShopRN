import { StyleSheet } from 'react-native'
import { primaryColor, desTextColor, color999, color000 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: { height: 157, backgroundColor: '#fff', marginBottom: 10 },
  line: {
    flexDirection: 'row',
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    marginHorizontal: 16,
  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    height: 60,
  },
  item1: {
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: color000,
    fontSize: 12,
    lineHeight: 17,
  },
  numText: {
    color: color999,
    fontSize: 14,
  },
  title1Text: {
    color: color999,
    fontSize: 14,
    lineHeight: 20,
  },
  num1Text: {
    color: color000,
    fontSize: 18,
  },
})

export default style
