import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color999 } from '../../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 16,
  },
  item: {},
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FF2442',
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
    height: 32,
    marginTop: 16,
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
    color: '#000',
    lineHeight: 28,
    paddingHorizontal: 3,
  },
  positionText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
    marginRight: 16,
    marginLeft: 3,
  },
  input: {
    paddingLeft: 10,
    flex: 1,
    color: '#4A4A4A',
    fontSize: 14,
    padding: 0,
  },
  searchicon: {
    color: btnPrimaryColor,
    fontSize: 16,
    marginLeft: 10,
  },
  choose: {
    flexDirection: 'row',
    borderRightColor: color999,
    borderRightWidth: 1,
    width: 57,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    // transform: [{rotate: '-90deg'}],
    fontSize: 8,
    color: color999,
  },
})

export default style
