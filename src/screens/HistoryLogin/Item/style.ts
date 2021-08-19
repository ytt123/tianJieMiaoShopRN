import { StyleSheet } from 'react-native'
import { color000 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 20,
    color: color000,
  },
})

export default style
