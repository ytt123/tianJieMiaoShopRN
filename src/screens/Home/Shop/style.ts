import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')
const style = StyleSheet.create({
  wrapper: {},
  top: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 9,
  },
  tagIcon: { width: 9, height: 19 },
  tagText: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    marginHorizontal: 5,
  },
  catesswrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cate: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 4,
    height: 89,
  },
  cateleft: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 4,
    height: 89,
  },
  cateright: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 4,
    height: 89,
  },
  cateIcon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderColor: 'red',
    borderWidth: 1,
  },
  cateText: { fontSize: 14, color: '#000' },
  cateIconWrap: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newWraps: {
    position: 'absolute',
    bottom: 3,
    borderRadius: 8,
    height: 16,
    width: 46,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newWraps2: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  newText: { fontSize: 10 },
  new2: { width: 25, height: 15 },
})

export default style
