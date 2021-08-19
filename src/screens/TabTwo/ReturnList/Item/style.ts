import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, color999 } from '../../../../config/style.config'
const style = StyleSheet.create({
  wrapper: { flex: 1, paddingHorizontal: 16, backgroundColor: '#fff', marginTop: 9 },
  topWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  centerWrap: {},
  goodsImg: {
    height: 80,
    width: 80,
    borderRadius: 2,
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemWrap: {},
  item: {
    marginRight: 9,
    alignItems: 'center',
  },

  all: {
    height: 44,
    alignItems: 'center',
    // borderTopColor: lineColor,
    // borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  shopWrap: {
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 14,
    color: '#9B9B9B',
  },
  shopText: {
    color: color999,
    fontSize: 14,
  },
  shop1Text: {
    color: '#898989',
    fontSize: 14,
  },
  desText: {
    fontSize: 14,
    color: btnPrimaryColor,
  },
  priceText: {
    fontSize: 14,
    color: color000,
    // fontWeight: '600',
  },
  desbackText: {
    fontSize: 14,
    color: '#4A90E2',
  },
  subText: {
    fontSize: 12,
    color: '#4A4A4A',
    marginTop: 4,
    lineHeight: 17,
    width: 80,
    textAlign: 'center',
  },
  arrow: {
    color: '#4A4A4A',
  },
  arrowback: {
    color: '#4A90E2',
  },

  btnsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 14,
  },
  btn2Text: {
    fontSize: 13,
    color: btnPrimaryColor,
    lineHeight: 27,
    width: 78,
    textAlign: 'center',
    borderRadius: 27 / 2,
    overflow: 'hidden',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: btnPrimaryColor,
    // backgroundColor: btnPrimaryColor,
  },
  btn1Text: {
    fontSize: 13,
    color: '#fff',
    lineHeight: 27,
    width: 78,
    textAlign: 'center',
    borderRadius: 27 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    backgroundColor: btnPrimaryColor,
  },
})

export default style
