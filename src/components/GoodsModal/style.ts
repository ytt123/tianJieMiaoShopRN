import { StyleSheet } from 'react-native'
import { primaryColor } from '../../config/style.config'

const style = StyleSheet.create({
  popWrap: { paddingHorizontal: 24 },
  top: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goodsWrap: { flexDirection: 'row', marginBottom: 10 },
  goodsInfoWrap: {
    marginLeft: 8,
    flex: 1,
  },
  specTitle: {
    fontSize: 13,
    lineHeight: 18,
    color: '#9B9B9B',
  },
  margins: {
    marginVertical: 4,
  },
  spcesContain: {},
  spceContain: { marginTop: 20 },
  spceWrap: { flexDirection: 'row', marginTop: 5, flexWrap: 'wrap' },
  specText: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    fontSize: 11,
    color: '#4A4A4A',
    marginRight: 5,
    marginBottom: 5,
    // lineHeight: 24,
  },
  seleSpecText: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    borderColor: primaryColor,
    borderWidth: 1,
    fontSize: 11,
    color: '#fff',
    backgroundColor: primaryColor,
    marginRight: 5,
    marginBottom: 5,
    // lineHeight: 24,
    overflow: 'hidden',
  },
  stepperWrap: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnWrap: {
    marginTop: 20,
    height: 52,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#fff',
    fontWeight: '500',
  },
  specimg: {
    width: 110,
    height: 110,
  },
  priceText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#DC2B2D',
  },
})

export default style
