import { StyleSheet } from 'react-native'
import { btnPrimaryColor, wrapperBg } from '../../config/style.config'

const style = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: wrapperBg,
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
  },
  top: {
    marginBottom: 25,
    alignItems: 'flex-start',
    marginTop: 50,
    paddingHorizontal: 16,
  },
  topCenter: {
    marginBottom: 25,
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    height: 44,
    borderRadius: 22,
    backgroundColor: btnPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
})

export default style
