import {StyleSheet} from 'react-native';
import {btnPrimaryColor} from '../../../config/style.config';

const style = StyleSheet.create({
  wrapper: {flexDirection: 'row'},
  selestar: {
    marginRight: 2,
    fontSize: 10,
    color: btnPrimaryColor,
  },
  star: {
    marginRight: 2,
    fontSize: 10,
    color: '#fff',
  },
});

export default style;
