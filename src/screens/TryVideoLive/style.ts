import { Dimensions, StyleSheet } from 'react-native'

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export default StyleSheet.create({
  max: {
    flex: 1,
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
    width: dimensions.width,
    height: dimensions.height,
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
    left: (dimensions.width - 45) / 2,
  },
  icon: {
    height: 45,
    width: 45,
  },
  addbom: {
    backgroundColor: 'red',
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addtop: {
    backgroundColor: 'green',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
})
