import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 13,
    backgroundColor: '#fff',
  },
  icon: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
    marginLeft: 12,
  },
  right: {
    marginLeft: 16,
    flex: 1,
    paddingRight: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tagWrap: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 22,
    borderRadius: 11,
    overflow: 'hidden',
    paddingHorizontal: 14,
    backgroundColor: '#304875',
  },
  tagText: {
    textAlign: 'center',
    color: '#FFD48F',
    fontSize: 12,
    lineHeight: 17,
  },
  titleText: {
    color: '#4A4A4A',
    fontSize: 16,
    lineHeight: 22,
  },
  desText: {
    color: '#4A4A4A',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 3,
    marginBottom: 7,
  },
  desText1: {
    color: '#4A4A4A',
    fontSize: 12,
    lineHeight: 17,
  },
})

export default style
