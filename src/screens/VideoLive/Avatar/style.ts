import { Dimensions, StyleSheet } from 'react-native'
import { color000, color333 } from '../../../config/style.config'

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
  recomgoods: {
    position: 'absolute',
    top: 80,
    width: 70,
    height: 70,
    borderRadius: 6,
    overflow: 'hidden',
  },
  recom: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  recomText: {
    backgroundColor: '#F43161',
    fontSize: 10,
    color: '#fff',
    padding: 2,
  },
  pointText: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: '#FF2442',
    marginRight: 5,
    fontSize: 12,
    color: color333,
  },
  addright: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FCF0F4',
    paddingHorizontal: 11,
    paddingVertical: 4,
    borderRadius: 2,
  },
})
