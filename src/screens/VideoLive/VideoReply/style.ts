import { StyleSheet, Platform } from 'react-native'
const isIos = Platform.OS === 'ios'
const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: '#f5f5f5',
    backgroundColor: '#fff',
    width: '100%',
  },
  wrapper11: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bom: {
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    minHeight: 36,
    alignItems: 'center',
    borderRadius: 18,
    marginVertical: 5,
    flex: 1,
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {},
      android: {
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: isIos ? 0 : 400,
        left: 0,
        right: 0,
      },
    }),
  },
  img: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
})

export default style
