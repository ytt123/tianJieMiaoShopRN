import { StyleSheet } from 'react-native'
import {
  btnPrimaryColor,
  color000,
  color999,
  lineColor,
  wrapperBg,
} from '../../../config/style.config'
const style = StyleSheet.create({
  safe: {
    flex: 1,
  },
  wrapper: { flex: 1, backgroundColor: '#fff' },
  items: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomColor: '#f2f1f1',
    // borderBottomWidth: 1,
  },
  tip: { marginTop: 20 },
  inputWrap: {
    // paddingTop: 6,
    // paddingBottom: 10,
    justifyContent: 'center',
    borderBottomColor: '#f2f1f1',
    borderBottomWidth: 1,
    height: 44,
  },
  input: {
    fontSize: 12,
    lineHeight: 17,
    color: color999,
  },
  imgText: {
    fontSize: 12,
    lineHeight: 17,
    color: color000,
  },

  topRight: {
    marginLeft: 10,
    flex: 1,
  },
  input1: {
    fontSize: 12,
    height: 50,
  },
  btns: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  btn: {
    marginTop: 12,
    backgroundColor: btnPrimaryColor,
    height: 48,
    marginBottom: 17,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  tipText: { fontSize: 12, lineHeight: 17, color: btnPrimaryColor },
  tipDesText: { fontSize: 12, lineHeight: 17, color: '#999' },
  titleText: {
    fontSize: 16,
    lineHeight: 22,
  },
  icon: {
    fontSize: 32,
    color: '#999',
  },
  icon2: {
    fontSize: 16,
    color: '#999',
  },

  icon1: {
    fontSize: 16,
    color: '#FF2442',
  },
  addimgWrap: {
    height: 87,
    width: 87,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addimg: {
    height: 87,
    width: 87,
    // marginBottom: 10,
    // borderRadius: 2,
    // borderWidth: 1,
    // borderStyle: 'dashed',
    // borderColor: '#d9d9d9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleTetx: {
    color: color999,
    fontSize: 8,
    lineHeight: 11,
  },
  topWrap: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 18,
    paddingBottom: 34,
  },
  borwrap: {
    borderBottomColor: wrapperBg,
    borderBottomWidth: 10,
  },
  goodsText: {
    fontSize: 12,
    lineHeight: 25,
    color: color000,
  },
  liveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
  },
})

export default style
