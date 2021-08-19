import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { Touchable } from '../../../components'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../../config/mainScreen.config'

import useUser from '../../../utils/hooks/useUser'

interface IndexProps {
  data: any
}
const TabText: React.FC<IndexProps> = props => {
  const { data } = props
  const { money = 0 } = data || {}
  const { navigate } = useNavigation()
  const { loginTip, userOnline } = useUser()
  const wthdrawals = useCallback(() => {
    if (userOnline) {
      navigate(mainScreenConfig.MyWithdrawals.name, { money })
    } else {
      loginTip(navigate)
    }
  }, [loginTip, money, navigate, userOnline])
  return (
    <View style={style.wrapper}>
      <Text style={style.desText}>可提现收益{money}元</Text>
      <Touchable style={style.btn} isflow={1} onPress={wthdrawals}>
        <Text style={style.titleText}>提现</Text>
      </Touchable>
    </View>
  )
}

export default TabText
