import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, color999 } from '../../../config/style.config'

const wid = 300
const hei = (wid * 692) / 610
const style = StyleSheet.create({
  wrapper: {},
  bgwrapper: {
    width: wid,
    height: hei,
    paddingHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
  },
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
