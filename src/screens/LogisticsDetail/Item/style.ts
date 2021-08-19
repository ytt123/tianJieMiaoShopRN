import { StyleSheet } from 'react-native'
import { textColor } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: { flexDirection: 'row', backgroundColor: '#fff' },
  left: {
    height: 90,
    width: 50,
    alignItems: 'center',
  },
  right: { flex: 1 },
  cycle: {
    borderRadius: 7 / 2,
    height: 7,
    width: 7,
    marginBottom: 5,
    backgroundColor: '#CE3D3A',
  },
  line: {
    height: 70,
    width: 1,
    backgroundColor: '#D8D8D8',
  },
  //text
  text: {
    fontSize: 12,
    lineHeight: 18,
    color: textColor,
  },
  time: {
    fontSize: 10,
    lineHeight: 18,
    color: '#9B9B9B',
  },

  textsele: {
    fontSize: 12,
    lineHeight: 18,
    color: '#CE3D3A',
  },
  timesele: {
    fontSize: 10,
    lineHeight: 18,
    color: '#CE3D3A',
  },
})

export default style
