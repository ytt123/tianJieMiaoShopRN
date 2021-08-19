import {StyleSheet} from 'react-native';
import {primaryColor} from '../../../config/style.config';
const style = StyleSheet.create({
  wrapper: {},
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tipText: {
    color: '#9B9B9B',
    fontSize: 12,
    lineHeight: 17,
    marginLeft: 7,
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
    lineHeight: 48,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  inputLabel: {
    // width: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // paddingRight: 20,
  },
});

export default style;
