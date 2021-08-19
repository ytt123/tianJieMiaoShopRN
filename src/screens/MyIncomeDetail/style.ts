import { StyleSheet } from 'react-native'
import { primaryColor, lineColor, wrapperBg } from '../../config/style.config'
const style = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  wrapper: { flex: 1 },

  topWrap: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 12,
    height: 48,
  },
  inputContain: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    marginTop: 5,
    paddingVertical: 17,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderBottomColor: lineColor,
    borderBottomWidth: 1,
  },
  tag: {
    padding: 0,
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  input: {
    padding: 0,
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 30,
    height: 40,
  },
  btn: {
    height: 48,
    borderRadius: 2,
    marginTop: 11,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#4A4A4A',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff',
  },
  line: {
    height: 2,
    backgroundColor: wrapperBg,
  },
})

export default style
