import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  wrapper: { flex: 1 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
  },
  top: {
    alignItems: 'center',
    marginTop: 33,
    marginBottom: 28,
  },

  icon: { marginBottom: 14, height: 62, width: 62, borderRadius: 31 },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    color: '#9b9b9b',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 50,
    color: '#4A4A4A',
  },
  input: {
    fontSize: 16,
    marginRight: 25,
    color: '#4A4A4A',
    width: 200,
    textAlign: 'right',
  },
  topText: {
    fontSize: 16,
    color: '#4A4A4A',
    lineHeight: 20,
  },
  desText: {
    fontSize: 16,
    lineHeight: 50,
    marginRight: 25,
    color: '#4A4A4A',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 22,
    // color: '#fff',
  },
  btnWrap: {
    marginBottom: 27,
    // marginHorizontal: 20,
    borderRadius: 2,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#Fff',
  },
})

export default style
