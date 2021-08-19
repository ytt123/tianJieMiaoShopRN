import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color999, color666, color000 } from '../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  scroll: {
    flex: 1,
  },
  goodsView: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  goodsImage: {
    width: 88,
    height: 88,
    borderRadius: 2,
    marginRight: 11,
  },
  goodsInfo: {
    flex: 1,
  },
  goodsPrice: {
    color: btnPrimaryColor,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 33,
  },
  goodsText: {
    color: color999,
  },
  goodsText1: {
    marginTop: 5,
    color: color666,
  },

  specView: {
    marginTop: 20,
  },
  specName: {
    color: color000,
    fontSize: 14,
  },
  optionsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionView: {
    marginTop: 10,
    marginRight: 10,
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 4,
    paddingBottom: 4,
    height: 24,
    borderRadius: 12,
  },
  optionsViewActive: {
    borderColor: btnPrimaryColor,
    backgroundColor: '#FFDFE4',
  },
  optionName: {
    color: color000,
    fontSize: 12,
  },
  optionNameActive: {
    color: btnPrimaryColor,
    fontSize: 12,
  },
  buttonView: {
    flexDirection: 'row',
    height: 40,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9100',
  },
  buttonRight: {
    backgroundColor: btnPrimaryColor,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
  },
  icon: {
    color: '#929292',
    fontSize: 25,
  },
})

export default style
