import { StyleSheet } from 'react-native'
import { desTextColor } from '../../config/style.config'
const style = StyleSheet.create({
  safe: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 22,
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    marginBottom: 25,
    alignItems: 'flex-start',
    marginTop: 34,
  },
  topCenter: {
    marginBottom: 25,
    alignItems: 'center',
    marginTop: 50,
  },
  bom: { alignItems: 'center', marginBottom: 20 },
  bomText: {
    marginTop: 20,
    color: desTextColor,
    fontSize: 14,
  },
})

export default style
