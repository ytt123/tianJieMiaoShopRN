import React from 'react'
import { View } from 'react-native'
import mainScreenConfig from '../../../config/mainScreen.config'
import style from './style'
import Item from '../Item'
const tabs = [
  {
    title: '银行卡',
    img: require('./assets/icon1.png'),
    url: mainScreenConfig.MyBankLIst.name,
  },
  {
    title: '交易明细',
    img: require('./assets/icon2.png'),
    url: mainScreenConfig.MyIncomeDetail.name,
  },
  {
    title: '历史排行',
    img: require('./assets/icon3.png'),
    url: mainScreenConfig.RankList.name,
  },
]
interface IndexProps {}
const TabText: React.FC<IndexProps> = props => {
  return (
    <View style={style.list}>
      {tabs.map((item, index) => {
        return <Item key={index} data={item} tag={index % 3} />
      })}
    </View>
  )
}

export default TabText
