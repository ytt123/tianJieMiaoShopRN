import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
const style = StyleSheet.create({
  wrapper: {},
  top: {flexDirection: 'row'},
  item: {
    height: 41,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  videoItem: {
    height: 250,
    width: (width - 18) / 2,
    borderRadius: 5,
  },
});

export default style;
