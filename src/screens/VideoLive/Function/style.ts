import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  btnWrapper: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 11,
  },

  icon: {
    height: 44,
    width: 44,
    backgroundColor: 'green',
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
})
