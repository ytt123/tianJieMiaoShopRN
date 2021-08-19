import { StyleSheet } from 'react-native'
import { desTextColor } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 10,
    paddingRight: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  icon: { height: 88, width: 88 },
  icon1: {
    height: 32,
    width: 32,
    marginHorizontal: 10,
  },
  timeicon: {
    height: 13,
    width: 13,
    marginRight: 5,
  },
  right: {
    flex: 1,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // text

  titleText: { fontSize: 14, lineHeight: 20 },
  desText: { fontSize: 13, lineHeight: 16, color: desTextColor, marginTop: 5 },

  btn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 40,
    height: 28,
    width: 80,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
})

export default style
