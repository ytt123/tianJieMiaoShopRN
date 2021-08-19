import React, { useCallback } from 'react'
import { View, TouchableOpacity } from 'react-native'
import style from './style'
import Iconfont from '../../../components/Iconfont'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../../config/mainScreen.config'
import useUser from '../../../utils/hooks/useUser'

interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const { userOnline } = useUser()
  const { navigate } = useNavigation()
  const toSettingPage = useCallback(() => {
    navigate(mainScreenConfig.SettingList.name)
  }, [navigate])
  return (
    <View style={style.wrapper}>
      {userOnline && (
        <TouchableOpacity onPress={toSettingPage}>
          <Iconfont iconfont={'\ue616'} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Index
