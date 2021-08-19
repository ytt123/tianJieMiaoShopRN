import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color666, primaryColor } from '../../config/style.config'
const style = StyleSheet.create({
  wrapper: {},
  btnsWrap1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 14,
  },
  btn1Text: {
    fontSize: 13,
    color: '#fff',
    lineHeight: 27,
    width: 78,
    textAlign: 'center',
    borderRadius: 27 / 2,
    overflow: 'hidden',

    backgroundColor: btnPrimaryColor,
  },

  btn2Text: {
    fontSize: 13,
    color: '#4A4A4A',
    lineHeight: 27,
    width: 78,
    textAlign: 'center',
    borderRadius: 27 / 2,
    overflow: 'hidden',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },

  modalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  modalTop1: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  modalbottom: {},
  topText: {
    fontSize: 13,
    color: '#4A4A4A',
    lineHeight: 38,
  },
  itemText: {
    lineHeight: 50,
    textAlign: 'center',
  },
  itemBorder: {
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 1,
  },

  popText: {
    fontSize: 13,
    color: color666,
  },
})

export default style
