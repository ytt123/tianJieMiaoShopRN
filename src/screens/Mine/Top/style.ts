import { StyleSheet } from 'react-native'
import { color000, color999 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    height: 96,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: -25,
  },
  item: { alignItems: 'center', flex: 1, height: 96, justifyContent: 'center' },
  titleText: {
    fontSize: 22,
    lineHeight: 30,
    color: color000,
    marginTop: 8,
  },
  desText: {
    fontSize: 14,
    lineHeight: 20,
    color: color999,
  },
})

export default style
