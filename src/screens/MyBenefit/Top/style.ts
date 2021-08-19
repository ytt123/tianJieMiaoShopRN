import { StyleSheet } from 'react-native'
import { color000, color999 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    height: 76,
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  avatar: {
    height: 56,
    width: 56,
    borderRadius: 28,
    marginRight: 10,
  },
  textWrap: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  btns: {
    marginRight: 14,
    paddingTop: 5,
  },
  icons: { color: color999 },
  phoneText: {
    color: color999,
    fontSize: 14,
    lineHeight: 20,
  },
  nameText: {
    color: color000,
    fontSize: 16,
    lineHeight: 22,
  },
})

export default style
