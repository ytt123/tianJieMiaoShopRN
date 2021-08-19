import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')
const style = StyleSheet.create({
  wrapper0: {
    width: (width - 32) / 3,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 25,
  },
  wrapper2: {
    width: (width - 32) / 3,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
  },
  wrapper: {
    width: (width - 32) / 3,
    height: 65,

    justifyContent: 'center',
    alignItems: 'center',
  },
  img: { height: 21, width: 21, marginBottom: 6 },
  titleText: { fontSize: 14, color: '#4A4A4A' },
})

export default style
