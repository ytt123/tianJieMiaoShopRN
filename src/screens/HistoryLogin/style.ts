import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color999, wrapperBg } from '../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: wrapperBg,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 37,
    color: color999,
    paddingLeft: 16,
  },
})

export default style
