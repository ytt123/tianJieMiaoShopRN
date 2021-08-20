import { StyleSheet } from 'react-native'
import { textColor, btnPrimaryColor, color000 } from '../../../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 93,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  itemIcon: { fontSize: 16 },
  seleItemIcon: {
    fontSize: 16,
    color: btnPrimaryColor,
  },
  icon: {
    height: 56,
    width: 56,
    marginLeft: 10,
    borderRadius: 4,
  },
  center: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: 10,
    height: 93,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  rightWrap: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: 93,
    paddingTop: 20,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 16,
    color: color000,
    marginTop: 20,
  },
  priceText: {
    fontSize: 16,
    lineHeight: 18,
    color: '#FF2442',
  },
  desText1: { fontSize: 12, lineHeight: 16, color: textColor },
  desText: { fontSize: 12, lineHeight: 16, color: textColor, marginTop: 1 },
})

export default style
