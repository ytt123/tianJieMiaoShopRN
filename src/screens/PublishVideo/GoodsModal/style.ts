import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, color999 } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {},
  topWrap: {},
  bom: {
    height: 44,
    backgroundColor: btnPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 22,
  },
  topTitleWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 16,
  },
  topCancelIcon: {
    height: 20,
    width: 20,
    color: color999,
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
