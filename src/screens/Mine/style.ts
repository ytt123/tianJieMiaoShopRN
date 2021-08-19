import { StyleSheet } from 'react-native'
import { wrapperBg } from '../../config/style.config'

const style = StyleSheet.create({
  wrapper: { flex: 1 },
  wrapper1: { flex: 1 },
  bom: {
    backgroundColor: wrapperBg,
    flex: 1,
  },
  topbg: {
    width: '100%',
    height: 185,
  },
  bomImg: {
    height: 100,
    marginHorizontal: 8,
    marginTop: 8,
    borderRadius: 4,
  },

  avatarWrap: {
    flexDirection: 'row',
    marginTop: 28,
    marginLeft: 23,
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 28,
    overflow: 'hidden',
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
    alignItems: 'flex-end',
  },
  btnWrap: {
    height: 28,
    width: 78,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff',
  },
  icons: { color: '#fff' },
  iconsRight: {
    color: '#fff',
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
  },
  phoneText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
})

export default style
