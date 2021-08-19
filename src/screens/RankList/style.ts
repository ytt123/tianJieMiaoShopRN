import { StyleSheet } from 'react-native'
import { btnPrimaryColor, wrapperBg } from '../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: wrapperBg,
    paddingHorizontal: 16,
  },

  rowBack: {
    alignItems: 'center',
    backgroundColor: wrapperBg,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    backgroundColor: btnPrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    marginTop: 10,
  },
  cancelText: {
    fontSize: 12,
    color: '#fff',
  },
})

export default style
