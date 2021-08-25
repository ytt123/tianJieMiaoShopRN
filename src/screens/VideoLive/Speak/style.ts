import { StyleSheet, Platform } from 'react-native'

const isIOS = Platform.OS === 'ios'
export default StyleSheet.create({
  max: {
    // width: 220,
    height: 200,
    position: 'absolute',
    bottom: 200,
    left: 16,
  },

  icon: {
    height: 45,
    width: 45,
  },
  item: {
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 3,
  },
  name: {
    fontSize: 12,
    color: '#FF2442',
    backgroundColor: 'rgba(0,0,0,0.3)',
    lineHeight: 21,
    paddingLeft: 10,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    overflow: 'hidden',
  },
  des: {
    paddingHorizontal: 10,
    marginLeft: isIOS ? 0.5 : 0,
    fontSize: 12,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.3)',
    lineHeight: 21,
  },
  des1: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    overflow: 'hidden',
    // flex: 1,
    // marginRight: 10,
  },
})
