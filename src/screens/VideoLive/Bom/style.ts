import { transform } from '@babel/core'
import { StyleSheet, Dimensions } from 'react-native'
import { color000, color333 } from '../../../config/style.config'
const { width } = Dimensions.get('screen')
const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  hitem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftitem: {
    position: 'absolute',
    top: 12,
    left: width / 2 - 25 - 30 - 50,
  },
  centeritem: {
    position: 'absolute',
    top: 12,
    width: 54,
    left: width / 2 - 27,
    right: 0,
  },
  icon: {
    fontSize: 24,
  },
  out: {
    height: 52,
    width: 52,
    borderRadius: 52,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#F43161',
  },
  leftText: {
    marginTop: 5,
    color: color333,
    fontSize: 11,
  },
  liveText: {
    marginTop: 5,
    color: '#F43161',
    fontSize: 11,
  },
})

export default style
