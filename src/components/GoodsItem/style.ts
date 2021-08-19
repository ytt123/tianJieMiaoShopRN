import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color000, desTextColor, textColor } from '../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  icon: {
    height: 88,
    width: 88,
    borderRadius: 5,
    // marginLeft: 12,
  },
  canter: {
    marginLeft: 16,
    flex: 1,
    paddingRight: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },

  titleText: {
    color: color000,
    fontSize: 14,
    lineHeight: 22,
  },
  desText: {
    textAlign: 'center',
    color: desTextColor,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 6,
  },
  priceText: { color: color000, fontSize: 16, lineHeight: 22 },
  numText: { color: textColor, fontSize: 12, lineHeight: 22 },

  tagText: {
    color: '#CE3D3A',
    fontSize: 11,
    lineHeight: 16,
  },
  bom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupWarp: {
    borderRadius: 10,
    borderColor: btnPrimaryColor,
    borderWidth: 1,
    width: 44,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupText: {
    color: btnPrimaryColor,
    fontSize: 12,
  },
})

export default style
