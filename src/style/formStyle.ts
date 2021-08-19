import { StyleSheet } from 'react-native'
import { btnPrimaryColor, inputColor } from '../config/style.config'

export const formStyle = StyleSheet.create({
  form: {},
  formHalfItem: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 2,
    overflow: 'hidden',
  },
  formHalfItemLeft: { flex: 1 },
  formItem: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 2,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  inputLabel: {
    width: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  inputLabelText: {
    color: '#0B042C',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: inputColor,
  },
  codeView: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 2,
    marginLeft: 10,
    backgroundColor: btnPrimaryColor,
  },
  buttons: {
    marginTop: 22,
  },
  button: {
    height: 48,
    borderRadius: 2,
    backgroundColor: btnPrimaryColor,
  },
  oper: {
    // marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  operText: {
    color: '#9B9B9B',
    lineHeight: 40,
  },
  thirdView: {
    alignItems: 'center',
    marginTop: 40,
  },
  thirdIcon: {
    fontSize: 36,
    color: '#3fb651',
    marginTop: 17,
    marginBottom: 7,
  },
  thirdText: {
    fontSize: 12,
    color: '#9B9B9B',
    marginHorizontal: 12,
  },
  wxText: {
    fontSize: 12,
    color: '#fff',
  },

  lineView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  thirdLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#D8D8D8',
  },
  //新增
  top: {
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeft: {
    marginLeft: 10,
    flex: 1,
  },
  inputLabel_tra: {
    width: 72,
    justifyContent: 'center',
  },
  inputLabelText_tra: {
    color: '#fff',
  },
})
