import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../../config/mainScreen.config'
import { Touchable } from '../../../components'
import { btnPrimaryColor } from '../../../config/style.config'
interface IndexProps {
  data: any
}
const Index: React.FC<IndexProps> = props => {
  const { data } = props
  const { commission = 0 } = data || {}
  const commission_ = Math.floor(commission * 100) / 100

  const { navigate } = useNavigation()
  const toWith = useCallback(() => {
    navigate(mainScreenConfig.MyWithdrawals.name, { money: commission_ })
  }, [commission_, navigate])
  const toList = useCallback(() => {
    navigate(mainScreenConfig.MyIncomeDetail.name, {})
  }, [navigate])

  return (
    <View style={style.wrapper}>
      <Text style={style.desText}>
        可收益提现<Text style={{ color: btnPrimaryColor }}>{commission_}</Text>元
      </Text>
      <View style={style.btns}>
        <Touchable style={style.item} onPress={toWith}>
          <Text style={style.titleText}>立即提现</Text>
        </Touchable>
        <Touchable style={style.item1} onPress={toList}>
          <Text style={style.title1Text}>收支明细</Text>
        </Touchable>
      </View>
    </View>
  )
}

export default Index
