import { StyleSheet } from 'react-native'
import { desTextColor } from '../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 13,
    backgroundColor: '#fff',
  },
  icon: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginLeft: 12,
  },
  right: {
    marginLeft: 16,
    flex: 1,
    paddingRight: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tagWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 16,
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: 8,
    borderColor: '#CE3D3A',
    borderWidth: 1,
    marginLeft: 10,
  },
  titleText: {
    color: '#4A4A4A',
    fontSize: 16,
    lineHeight: 22,
  },
  desText: {
    textAlign: 'center',
    color: desTextColor,
    fontSize: 12,
    lineHeight: 17,
  },
  priceText: { color: '#CE3D3A', fontSize: 16, lineHeight: 22 },

  tagText: {
    color: '#CE3D3A',
    fontSize: 11,
    lineHeight: 16,
  },
  bom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default style
