import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({
  max: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    // backgroundColor: 'green',
  },
  buttonHolder: {
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
  },
  fullView: {
    width,
    height,
  },
  remoteContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 5,
  },
  remote: {
    width: 150,
    height: 150,
    marginHorizontal: 2.5,
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#0093E9',
  },
  bom: {
    position: 'absolute',
    bottom: 30,
    left: (width - 45) / 2,
  },
  icon: {
    height: 45,
    width: 45,
  },
})
