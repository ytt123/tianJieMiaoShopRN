import { StyleSheet } from 'react-native'
import { color000, color999 } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    height: 40,
    justifyContent: 'center',
  },
  seletitle: { fontSize: 16, lineHeight: 22, color: color000, fontWeight: '500' },
  title: { fontSize: 16, lineHeight: 22, color: color999 },
})

export default style
