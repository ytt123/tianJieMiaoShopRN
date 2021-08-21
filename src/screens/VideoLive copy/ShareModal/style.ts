import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, color999 } from '../../../config/style.config'

const wid = 350
const hei = (wid * 692) / 610
const style = StyleSheet.create({
  wrapper: {},
  bgwrapper: {
    width: wid,
    height: hei,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingVertical: 50,
    alignItems: 'center',
  },
  topWrap: { justifyContent: 'center', alignItems: 'center' },
  bomWrap: { justifyContent: 'center', alignItems: 'center' },

  icon: {
    width: 68,
    height: 68,
    position: 'absolute',
    top: -34,
    borderRadius: 34,
    left: (wid - 68) / 2,
    right: 0,
  },
  titleText: {
    fontSize: 16,
    color: '#fff',
  },
  desText: {
    fontSize: 14,
    color: '#fff',
  },
  tipText: {
    marginTop: 16,
    fontSize: 14,
    color: '#FF2442',
  },
})

export default style
