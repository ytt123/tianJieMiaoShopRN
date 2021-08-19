import { StyleSheet } from 'react-native'
import { color000 } from '../../config/style.config'

const style = StyleSheet.create({
  wrapper: { flex: 1 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  item1: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  top: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 33,
    paddingBottom: 28,
  },

  icon: { marginBottom: 14, height: 62, width: 62, borderRadius: 31 },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    color: '#898989',
    marginLeft: 10,
    fontSize: 15,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 44,
    color: '#333',
  },

  input: {
    fontSize: 16,
    marginRight: 25,
    color: '#666',
    width: 200,
    textAlign: 'right',
  },
  topText: {
    fontSize: 16,
    color: '#4A4A4A',
    lineHeight: 20,
  },
  desText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },

  backImg: {
    height: 50,
    width: 50,
  },
  btnWrap: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  btnText: {
    fontSize: 16,
    color: color000,
  },
})

export default style
