import { useCallback, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ajax, url } from '../../api'
import useSpinner from '../../utils/hooks/useSpinner'
import { Toast } from '@ant-design/react-native'
import useUser from '../../utils/hooks/useUser'
const useIndex = () => {
  const [info, setInfo] = useState<any>({
    uuid: '',
    bank_name: '',
    sub_bank_name: '',
    card_holder: '',
    card_number: '',
  })
  const { spinningChange } = useSpinner()
  const { goBack } = useNavigation()
  const { user_type = '' } = useUser()
  const isagent = user_type.indexOf('AGENT') > -1

  const submit = useCallback(() => {
    // console.log(isagent ? '是代理商' : '不是代理商')
    if (!isagent) {
      spinningChange(true)

      if (info?.uuid) {
        ajax({ url: url.bankCardsEdit, data: info })
          .then(res => {
            Toast.show(res?.msg)
            spinningChange(false)
            setTimeout(() => {
              goBack()
            }, 500)
          })
          .catch(err => {
            spinningChange(false)
          })
      } else {
        ajax({ url: url.bankCardsgetCreate, data: info })
          .then(res => {
            Toast.show(res?.msg)
            spinningChange(false)
            setTimeout(() => {
              goBack()
            }, 500)
          })
          .catch(err => {
            spinningChange(false)
          })
      }
    } else {
      if (info?.uuid) {
        ajax({ url: url.agentBankCardsEdit, data: info })
          .then(res => {
            Toast.show(res?.msg)
            spinningChange(false)
            setTimeout(() => {
              goBack()
            }, 500)
          })
          .catch(err => {
            spinningChange(false)
          })
      } else {
        console.log(JSON.stringify(info, null, 2))
        ajax({ url: url.agentBankCardsgetCreate, data: info })
          .then(res => {
            Toast.show(res?.msg)
            spinningChange(false)
            setTimeout(() => {
              goBack()
            }, 500)
          })
          .catch(err => {
            spinningChange(false)
          })
      }
    }
  }, [goBack, info, isagent, spinningChange])

  useEffect(() => {
    if (!isagent) {
      spinningChange(true)
      ajax({ url: url.bankCardsgetDefault })
        .then(res => {
          spinningChange(false)

          const { uuid, bank_name, sub_bank_name, card_holder, card_number } = res?.data || {}
          setInfo({ uuid, bank_name, sub_bank_name, card_holder, card_number })
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
          setInfo({ uuid, bank_name, sub_bank_name, card_holder, card_number })
        })
        .catch(err => {
          spinningChange(false)
        })
    }
  }, [isagent, spinningChange])
  return { submit, info, setInfo }
}

export default useIndex
