import { StyleSheet } from 'react-native'
import { primaryColor, textColor, desTextColor } from '../../config/style.config'
const style = StyleSheet.create({
  wrapper: {},
  boms: {
    flexDirection: 'row',
    marginTop: 28,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#4A4A4A',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  des: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4A4A4A',
  },
  btnText: {
    width: 117,
    fontSize: 14,
    lineHeight: 34,
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    color: '#9B9B9B',
    borderRadius: 2,
    overflow: 'hidden',
  },
  btnsText: {
    width: 100,
    fontSize: 14,
    lineHeight: 34,
    textAlign: 'center',
    backgroundColor: primaryColor,
    color: '#fff',
    borderRadius: 2,
    overflow: 'hidden',
  },
  dealTetx: {
    color: '#4A90E2',
  },
  icon: {
    height: 61,
    width: 61,
  },

  //权限
  ptitleText: {
    fontSize: 14,
    lineHeight: 20,
    color: textColor,
    marginTop: 20,
  },
  pdesText: {
    fontSize: 12,
    lineHeight: 17,
    color: desTextColor,
  },
  pheadText: {
    fontSize: 18,
    lineHeight: 25,
    color: textColor,
    textAlign: 'center',
    marginBottom: 10,
  },
})

export default style
