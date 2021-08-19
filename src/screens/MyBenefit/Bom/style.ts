import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color999 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
  },
  item: {
    width: 86,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: btnPrimaryColor,
  },
  item1: {
    width: 86,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: btnPrimaryColor,
    marginLeft: 20,
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 12,
    color: '#fff',
  },
  title1Text: {
    fontSize: 12,
    color: btnPrimaryColor,
  },
  desText: {
    fontSize: 12,
    color: color999,
  },
})

export default style
