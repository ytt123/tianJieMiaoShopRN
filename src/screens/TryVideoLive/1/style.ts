import { StyleSheet } from 'react-native'
import { btnPrimaryColor, color999, gr8e } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {},
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  rowsitem: {
    alignItems: 'center',
  },
  icon: { fontSize: 40, color: gr8e },
  seleicon: {
    fontSize: 40,
    color: btnPrimaryColor,
  },
  toptext: {
    color: btnPrimaryColor,
    fontSize: 14,
  },
  itemtext: {
    color: color999,
    fontSize: 11,
    marginTop: 5,
  },
})

export default style
