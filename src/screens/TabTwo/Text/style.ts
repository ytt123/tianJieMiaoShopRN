import { StyleSheet } from 'react-native'
import { textColor, btnPrimaryColor } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  seletitle: { fontSize: 14, lineHeight: 22, color: btnPrimaryColor },
  title: { fontSize: 14, lineHeight: 22, color: textColor },
  seleline: {
    backgroundColor: btnPrimaryColor,
    width: 30,
    height: 2,
    marginBottom: 6,
    marginTop: 4,
  },
  line: {
    backgroundColor: '#fff',
    width: 30,
    height: 2,
    marginBottom: 6,
    marginTop: 4,
  },
})

export default style
