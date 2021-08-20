import { StyleSheet } from 'react-native'
import { color000, color333 } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 9,
  },
  addright: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCF0F4',
    paddingHorizontal: 11,
    paddingVertical: 4,
    borderRadius: 2,
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
  cancel: {
    fontSize: 22,
  },
})

export default style
