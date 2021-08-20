import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, color999 } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {},
  bom: {
    height: 44,
    backgroundColor: btnPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 10,
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
})

export default style
