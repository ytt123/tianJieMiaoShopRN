import { StyleSheet } from 'react-native'
import { textColor, btnPrimaryColor } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    height: 185,
    marginHorizontal: 16,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  item: { alignItems: 'center' },
  item1: { alignItems: 'flex-start' },
  item2: { alignItems: 'flex-end' },
  allItem: { marginHorizontal: 22 },
  bothItem: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 },
  bothItem1: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  titleText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff',
  },
  desText: {
    fontSize: 22,
    lineHeight: 30,
    color: '#fff',
    marginTop: 5,
  },
  symble: {
    fontSize: 12,
  },
})

export default style
