import { Dimensions, StyleSheet } from 'react-native'
import { primaryColor, textColor, inputBgColor, inputColor } from '../../../config/style.config'

const style = StyleSheet.create({
  wrapper: {},
  noseeText: {
    color: 'transparent',
  },
  wx: {
    height: 34,
    width: 34,
    marginTop: 17,
    marginBottom: 7,
  },
  tip: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 14,
    color: '#fff',
  },
  tipText: {
    color: textColor,
    fontSize: 12,
    lineHeight: 17,
  },
  tipImg: {
    color: primaryColor,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#ff2442',
  },

  buttonText: {
    height: 48,
    fontSize: 16,
    lineHeight: 48,
    textAlign: 'center',
    color: '#fff',
  },
  inputLabel: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  inputLabelText: {
    color: '#0B042C',
    borderRightWidth: 1,
  },
  input: {
    flex: 1,
    backgroundColor: inputBgColor,
    color: inputColor,
  },
  formItem: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 10,
  },

  // 验证码带下划线输入格
  textInputItem: {
    width: 42,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#d8d8d8',
  },
  textInputItemIn: {
    width: 42,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#d8d8d8',
  },
  // 输入验证码样式
  verifyText: {
    fontSize: 25,
    color: '#282828',
  },
  // 验证码文本框容器
  verifyTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
  },
})

export default style
