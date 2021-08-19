import { StyleSheet } from 'react-native'
import { color000 } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  img: {
    height: 17,
    width: 17,
  },
  input: { minWidth: 50, textAlign: 'center', marginHorizontal: 5 },
  titleText: {
    fontSize: 14,
    color: color000,
  },
})

export default style
