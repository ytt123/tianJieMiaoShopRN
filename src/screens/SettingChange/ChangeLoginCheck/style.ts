import { StyleSheet } from 'react-native'
import { primaryColor } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {},
  noseeText: {
    color: 'transparent',
  },
  codeText: {
    fontSize: 14,
    color: '#fff',
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
  buttons: {
    marginTop: 10,
    borderRadius: 24,
    overflow: 'hidden',
  },
  buttonText: {
    lineHeight: 48,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tipText: {
    color: '#9B9B9B',
    fontSize: 12,
    lineHeight: 17,
    marginLeft: 7,
  },
  tipImg: {
    color: primaryColor,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formItem: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 2,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  form: {
    paddingHorizontal: 16,
  },
  headText: {
    lineHeight: 48,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 10,
    width: 80,
  },
})

export default style
