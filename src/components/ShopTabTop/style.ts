import { StyleSheet } from 'react-native'
import { btnPrimaryColor } from '../../config/style.config'
const style = StyleSheet.create({
  wrapper: { height: 190, paddingHorizontal: 16 },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    marginTop: 10,
  },
  bom: { marginTop: 5, flexDirection: 'row' },
  bom1: { marginTop: 5, flexDirection: 'row' },
  homeIcon: {
    height: 24,
    width: 24,
  },
  topcenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  topIcon: {
    height: 36,
    width: 36,
    marginRight: 10,
  },
  centerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerBtnWrap: {
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  centerBtnWrap1: {
    backgroundColor: btnPrimaryColor,
    // borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  centerText: {
    fontSize: 12,
    color: '#fff',
  },
  centerBtnText: { fontSize: 10, color: '#fff' },
  starWrap: {
    flexDirection: 'row',
    marginTop: 5,
  },
  starItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressWrap: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  addressIcon: { fontSize: 16, color: '#fff', marginRight: 3 },
  searchIcon: {
    fontSize: 32,
    color: '#fff',
  },
  seg: { flex: 1, backgroundColor: 'rgba(0,0,0,0)' },
  topLeft: {
    width: 60,
  },
  searchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderWidth: 1,
    width: '100%',
    height: 32,
    borderRadius: 16,
  },
  smallSearchIcon: {
    marginHorizontal: 5,
    color: '#999',
    fontSize: 20,
  },
  searchText: { color: '#999', fontSize: 12 },
  titleText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
})

export default style
