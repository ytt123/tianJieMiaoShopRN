import { Dimensions, StyleSheet } from 'react-native'
import { color000 } from '../../../config/style.config'

export default StyleSheet.create({
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 20,
    right: 20,
    alignItems: 'center',
  },

  icon: {
    height: 28,
    width: 28,
    borderRadius: 28 / 2,
  },
  left: {
    backgroundColor: 'rgba(0,0,0,.3)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 32,
    padding: 4,
  },
  leftcenter: {
    marginHorizontal: 4,
  },
  attenText: {
    backgroundColor: '#F43161',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 26,
    borderRadius: 13,
    paddingHorizontal: 10,
    overflow: 'hidden',
    fontSize: 12,
    color: '#fff',
  },
  nameText: {
    fontSize: 11,
    color: '#fff',
  },
  numText: {
    fontSize: 8,
    color: color000,
  },
  cancelText: {
    fontSize: 20,
    color: '#fff',
  },
})
