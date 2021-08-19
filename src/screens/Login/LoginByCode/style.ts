import { StyleSheet } from 'react-native'
import { primaryColor, textColor } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {},
  noseeText: {
    color: 'transparent',
  },
  wx: {
    height: 34,
    width: 34,
    marginTop: 17,
    marginBottom: 7,
  },

  tip: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 14,
    color: '#fff',
  },
  tipText: {
    color: textColor,
    fontSize: 12,
    lineHeight: 17,
  },
  tipImg: {
    color: primaryColor,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#ff2442',
  },

  buttonText: {
    height: 48,
    fontSize: 16,
    lineHeight: 48,
    textAlign: 'center',
    color: '#fff',
  },
  inputLabel: {
    width: 50,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    // borderRightWidth: 1,
    // borderRightColor: 'red',
  },
  inputLabelText: {
    color: '#0B042C',
    // borderRightWidth: 1,
  },
})

export default style
