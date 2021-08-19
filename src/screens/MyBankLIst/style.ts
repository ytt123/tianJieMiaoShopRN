import { StyleSheet } from 'react-native'
import { lineColor } from '../../config/style.config'
const style = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  wrapper: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 17 },
  top: {
    marginTop: 15,
    marginBottom: 19,
  },
  line: {
    flexDirection: 'row',
    height: 57,
    borderBottomColor: lineColor,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  left: {
    height: 52,
    width: 100,
  },
  textInput: {
    flex: 1,
    textAlign: 'right',
  },
  btn: {
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF2442',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  // text
  titleText: {
    lineHeight: 52,
  },
  btnText: {
    lineHeight: 42,
    textAlign: 'center',
    color: '#fff',
  },
  oper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2442',
    height: 44,
    width: 86,
    borderRadius: 2,
    marginLeft: 10,
  },
  operText: { fontSize: 14, lineHeight: 20, color: '#fff' },
})

export default style
