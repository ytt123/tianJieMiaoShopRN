import { StyleSheet } from 'react-native'
import { textColor } from '../../config/style.config'
const style = StyleSheet.create({
  wrapper: { flex: 1 },
  center: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  text: { color: textColor, fontSize: 13 },
})

export default style
