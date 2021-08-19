import { useState, useCallback, useEffect } from 'react'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../api'
import useSpinner from '../../utils/hooks/useSpinner'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import useUser from '../../utils/hooks/useUser'
const useIndex = () => {
  const { spinningChange } = useSpinner()
  const { navigate } = useNavigation()

  const [number, setNumber] = useState('0')
  const [bankCardInfo, setBankCardInfo] = useState<any>({})

  const { user_type = '' } = useUser()
  const isagent = user_type.indexOf('AGENT') > -1

  const goBank = useCallback(() => {
    navigate(mainScreenConfig.MyBankLIst.name, {})
  }, [navigate])
  const withDrawClick = useCallback(() => {
    if (!+number) {
      Toast.show('请输入正确金额')
      return
    }

    if (!isagent) {
      spinningChange(true)
      ajax({
        url: url.drawcashsCreate,
        data: {
          pay_password: '123456',
          asset_type_value: 'REWARD',
          number,
          drawcash_type: 'BANKCARD',
          bank_card_uuid: bankCardInfo?.uuid,
        },
      })
        .then(res => {
          spinningChange(false)
          const { msg } = res
          Toast.show(msg)
        })
        .catch(err => {
          spinningChange(false)
        })
    } else {
      spinningChange(true)
      ajax({
        url: url.agentDrawcashsCreate,
        data: {
          pay_password: '123456',
          asset_type_value: 'REWARD',
          number,
          drawcash_type: 'BANKCARD',
          bank_card_uuid: bankCardInfo?.uuid,
        },
      })
        .then(res => {
          spinningChange(false)
          const { msg } = res
          Toast.show(msg)
        })
        .catch(err => {
          spinningChange(false)
        })
    }
  }, [bankCardInfo.uuid, isagent, number, spinningChange])

  const checkbank = useCallback(() => {
    if (!isagent) {
      spinningChange(true)
      ajax({ url: url.bankCardsgetDefault })
        .then(res => {
          spinningChange(false)

          const { uuid, bank_name, sub_bank_name, card_holder, card_number } = res?.data || {}
          setBankCardInfo({ uuid, bank_name, sub_bank_name, card_holder, card_number })
        })
        .catch(err => {
          spinningChange(false)
        })
    } else {
      spinningChange(true)
      ajax({ url: url.agentBankCardsgetDefault })
        .then(res => {
          spinningChange(false)

          const { uuid, bank_name, sub_bank_name, card_holder, card_number } = res?.data || {}
          setBankCardInfo({ uuid, bank_name, sub_bank_name, card_holder, card_number })
        })
        .catch(err => {
          spinningChange(false)
        })
    }
  }, [isagent, spinningChange])

  useFocusEffect(
    useCallback(() => {
      checkbank()
    }, [checkbank]),
  )

  return {
    withDrawClick,
    bankCardInfo,
    number,
    setNumber,
    goBank,
  }
}
export default useIndex
