import { StyleSheet } from 'react-native'
import { textColor } from '../../../config/style.config'
const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 16,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  rightWrap: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  img: {
    height: 80,
    width: 80,
  },
  text: {
    fontSize: 13,
    color: textColor,
  },
  title: {
    fontSize: 15,
    color: textColor,
    fontWeight: 'bold',
  },
})

export default style
