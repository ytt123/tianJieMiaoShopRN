import { StyleSheet } from 'react-native'
import { primaryColor } from '../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    paddingTop: 80,
    alignItems: 'center',
  },
  tipText: {
    color: '#4a4a4a',
    marginTop: 12,
  },
  tipButton: {
    marginTop: 20,
    color: '#fff',
    width: 126,
    height: 36,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  tipButtonText: {
    color: '#fff',
  },
  cartEmptyPng: {
    width: 152,
    height: 165,
  },
  commentEmptyPng: {
    width: 172,
    height: 172,
  },
  addressEmptyPng: {
    width: 136,
    height: 159,
  },
  collectionEmptyPng: {
    width: 181,
    height: 135,
  },
  orderEmptyPng: {
    width: 133,
    height: 155,
  },
  goodsListEmptyPng: {
    width: 116,
    height: 98.25,
  },
})

export default style
