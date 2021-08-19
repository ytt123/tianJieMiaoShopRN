import { StyleSheet, Dimensions } from 'react-native'
import { color000, color999 } from '../../config/style.config'
const { width } = Dimensions.get('screen')
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    height: 87,
    width: (width - 44 - 30) / 4,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 10,
  },
  addimg: {
    height: 87,
    width: (width - 44 - 30) / 4,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteImgWrap: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: -8,
    right: -8,
  },
  deleteImg: {
    height: 20,
    width: 20,
  },
  icon: {
    fontSize: 32,
    color: '#d9d9d9',
  },
  titleTetx: {
    color: color999,
    fontSize: 8,
    lineHeight: 11,
  },
})

export default style
