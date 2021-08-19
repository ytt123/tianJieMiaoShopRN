import { StyleSheet } from 'react-native'
import { color999 } from '../../config/style.config'

const style = StyleSheet.create({
  wrapper: { flex: 1 },
  bomText: {
    color: color999,
    fontSize: 10,
    textAlign: 'center',
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 10,
    marginBottom: 10,
  },
})

export default style
