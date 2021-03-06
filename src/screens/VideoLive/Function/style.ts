import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  btnWrapper: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingHorizontal: 11,
  },

  icon: {
    height: 44,
    width: 44,
    // backgroundColor: 'green',
  },
  bomcenter: { flex: 1 },
  iconText: {
    color: '#fff',
  },
  rightitem: {
    flexDirection: 'column',
    marginLeft: 20,
    alignItems: 'center',
  },
  rightText: {
    marginTop: 3,
    color: '#fff',
  },
  inputText: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    lineHeight: 44,
    borderRadius: 22,
    overflow: 'hidden',
    paddingLeft: 20,
    fontSize: 14,
    color: '#fff',
  },
})
