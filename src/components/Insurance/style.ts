import { StyleSheet } from 'react-native'
import { primaryColor } from '../../config/style.config'
const style = StyleSheet.create({
  wrapper: {},
  boms: {
    flexDirection: 'row',
    marginTop: 28,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
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
    width: 200,
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
    height: 47,
    width: 47,
    marginBottom: 10,
  },
})

export default style
