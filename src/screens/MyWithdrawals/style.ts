import { StyleSheet } from 'react-native'
import {
  primaryColor,
  lineColor,
  btnPrimaryColor,
  color000,
  color999,
  color666,
} from '../../config/style.config'
const style = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  wrapper: { flex: 1 },

  topWrap: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 85,
    borderBottomColor: lineColor,
    borderBottomWidth: 1,
  },
  top1Wrap: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: 85,
    borderBottomColor: lineColor,
    borderBottomWidth: 1,
    paddingTop: 10,
  },
  topRight: {
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginLeft: 10,
  },
  inputContain: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderBottomColor: lineColor,
    borderBottomWidth: 1,
  },
  tag: {
    padding: 0,
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  input: {
    padding: 0,
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 30,
    height: 40,
  },
  btn: {
    height: 44,
    borderRadius: 22,
    marginTop: 11,
    backgroundColor: btnPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  titleText: {
    fontSize: 12,
    lineHeight: 17,
    color: color000,
  },
  title1Text: {
    fontSize: 12,
    lineHeight: 17,
    color: '#898989',
    marginTop: 10,
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff',
  },
  bankText: {
    color: color999,
    fontSize: 12,
  },
  icon: {
    color: color666,
    fontSize: 12,
  },
})

export default style
