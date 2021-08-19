import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    height: 50,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#fff',
  },
  btn: {
    height: 28,
    width: 78,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: btnPrimaryColor,
    paddingHorizontal: 5,
    borderRadius: 14,
  },
  desText: {
    fontSize: 14,
    lineHeight: 20,
    color: color000,
  },
})

export default style
