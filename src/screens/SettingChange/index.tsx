import React, { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import style from './style'
import Bind from './Bind'
import ChangeBind from './ChangeBind'
import ChangeLogin from './ChangeLogin'
import ChangeLoginCheck from './ChangeLoginCheck'
import userIndex from './userIndex'
import ChangeInfo from './ChangeInfo'
import { textStyle } from '../../style/textStyle'
import { Touchable } from '../../components'
import useUser from '../../utils/hooks/useUser'
interface IndexProps {
  route: { params: { type: string } }
}
const Index: React.FC<IndexProps> = props => {
  const {
    route: {
      params: { type },
    },
  } = props
  const { userInfo } = useUser()
  const { mobile } = userInfo?.toJS() || {}
  const [value, setValue] = useState<any>('')
  const { screenType, setScreenType, save, shopInfo } = userIndex(type, value)
  const [changeLoginData, setChangeLoginData] = useState<any>({})

  return (
    <SafeAreaView style={style.safe}>
      <ScrollView style={style.wrapper}>
        {(screenType === 'changeBind' ||
          screenType === 'bind' ||
          screenType === 'ChangeLoginCheck') && (
          <View style={style.top}>
            <Text style={textStyle.heading}>
              {screenType === 'changeBind' && `已绑定手机号${mobile}`}
              {screenType === 'bind' && '设置手机号'}
              {screenType === 'ChangeLoginCheck' && '为了您的账户安全，请先验证'}
            </Text>
          </View>
        )}
        {screenType === 'changeBind' && <ChangeBind setScreenType={setScreenType} />}
        {screenType === 'bind' && <Bind setScreenType={setScreenType} />}
        {screenType === 'changeLogin' && (
          <ChangeLogin setScreenType={setScreenType} changeLoginData={changeLoginData} />
        )}
        {(screenType === 'address' || screenType === 'shopName') && (
          <ChangeInfo screenType={screenType} setValue={setValue} shopInfo={shopInfo} />
        )}

        {screenType === 'ChangeLoginCheck' && (
          <ChangeLoginCheck setScreenType={setScreenType} setChangeLoginData={setChangeLoginData} />
        )}
      </ScrollView>

      {(screenType === 'shopName' || screenType === 'address') && (
        <Touchable style={style.button} onPress={save}>
          <Text style={style.buttonText}>保存</Text>
        </Touchable>
      )}
    </SafeAreaView>
  )
}

export default Index
