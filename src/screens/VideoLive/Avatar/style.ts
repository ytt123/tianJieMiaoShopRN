import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  iconWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    left: 20,
    alignItems: 'center',
  },
  nameText: { fontSize: 16, marginLeft: 10 },
  icon: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
  },
})
