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
  rigth: {
    width: 80,
    alignItems: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#ff2442',
  },
  buttonText: {
    lineHeight: 48,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tipText: {
    color: textColor,
    fontSize: 12,
    lineHeight: 17,
    marginLeft: 7,
  },
  tipImg: {
    color: primaryColor,
  },
  inputLabel: {
    // width: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // paddingRight: 20,
  },
})

export default style
