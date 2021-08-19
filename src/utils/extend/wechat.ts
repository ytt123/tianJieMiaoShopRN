//@ts-ignore
// import * as WeChat from 'react-native-wechat-lib'
import { Toast } from '@ant-design/react-native'
import { ajax, url } from '../../api'
import { delay } from '../util'

interface OauthResData {
  unionid: string
  uuid: string
}

/**
 * 微信授权
 */
export const wechatAccountGet = async (
  spinningChange: (spinning: boolean) => void,
): Promise<OauthResData> => {
  try {
    // const sendRes = await WeChat.sendAuthRequest('snsapi_userinfo')
    // console.log('-------- login success -------')
    // const { code } = sendRes
    const { code = '' } = {}
    spinningChange(true)
    console.log('-------- login success -------', code)
    await delay(1000)

    //todo
    const oauthRes = await ajax({
      url: url.oauthWxApp,
      data: {
        code,
        oauth_type: 'USER_APP',
        is_check_unionid: 1,
      },
    })

    spinningChange(false)
    const { data } = oauthRes
    return data
  } catch (error) {
    console.log(66, error)
    Toast.show('微信授权登录失败')
    spinningChange(false)
    return Promise.reject(error)
  }
}
