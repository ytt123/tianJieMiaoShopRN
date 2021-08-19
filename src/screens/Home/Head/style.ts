import { StyleSheet } from 'react-native'
import { btnPrimaryColor } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: { height: 44, justifyContent: 'center', backgroundColor: '#fff' },
  item: {},
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FF2442',
    borderWidth: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  centerText: {
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#999',
  },
  position: {
    paddingLeft: 6,
    flexDirection: 'row',

    width: 65,
    alignItems: 'center',
  },
  topRight: { width: 65, justifyContent: 'center', alignItems: 'center' },
  topRightText: {
    backgroundColor: 'red',
    color: '#fff',
    lineHeight: 28,
    paddingHorizontal: 3,
    borderColor: '#FF2442',
    borderWidth: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  positionText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
    marginRight: 16,
    marginLeft: 3,
  },
  addressIcon: { color: btnPrimaryColor, fontSize: 16 },
})

export default style
