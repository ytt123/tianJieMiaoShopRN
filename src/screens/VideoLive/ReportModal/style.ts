import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, color999 } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {},
  bom: {
    height: 44,
    backgroundColor: btnPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',

    // marginVertical: 10,
    marginTop: 100,
    borderRadius: 22,
  },

  btnText: {
    color: '#fff',
  },
  titleText: {
    fontSize: 16,
    lineHeight: 22,
    color: color000,
  },
  inputWrap: {
    paddingHorizontal: 10,
    borderColor: '#f5f5f5',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 12,
    height: 100,
    color: color999,
    lineHeight: 17,
  },
})

export default style
