import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  wrapper: {},
  boms: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: '#4A4A4A',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  des: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4A4A4A',
  },
  btnText: {
    width: 117,
    fontSize: 14,
    lineHeight: 34,
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    color: '#9B9B9B',
    borderRadius: 2,
    overflow: 'hidden',
  },
  btnsText: {
    width: 150,
    fontSize: 14,
    lineHeight: 40,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#E46478',
    borderRadius: 20,
    overflow: 'hidden',
  },
  dealTetx: {
    color: '#4A90E2',
  },
  icon: {
    height: 109,
    width: 297,
  },
  cancel: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 0,
    right: -20,
  },
  topText: {
    fontSize: 15,
    lineHeight: 50,
    color: '#fff',
    textAlign: 'center',
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4F4F4F',
  },
  timeText: {
    fontSize: 11,
    lineHeight: 16,
    color: '#AAAAAA',
  },
  priceText: {
    fontSize: 25,
    lineHeight: 38,
    color: '#fff',
  },
})

export default style
