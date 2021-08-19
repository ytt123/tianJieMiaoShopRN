import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
const style = StyleSheet.create({
  wrapper: {backgroundColor: '#fff', marginTop: 5},
  icon: {width: (width - 18) / 2, height: 344},
  priceWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bom: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleWrap: {
    marginBottom: 5,
  },
  titletext: {
    fontSize: 10,
  },
  priceText: {
    fontSize: 10,
    color: '#999',
  },
  numText: {
    fontSize: 10,
    color: '#999',
  },
});

export default style;
