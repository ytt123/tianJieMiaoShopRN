import * as constants from './constants'

const spinningChange = (spinning: boolean) => ({
  type: constants.SPINNING_CHANGE,
  spinning,
})

const isWxInstalledChange = (isWXAppInstalled: boolean) => ({
  type: constants.IS_WX_INSTALLED_CHANGE,
  isWXAppInstalled,
})

export default {
  spinningChange,
  isWxInstalledChange,
}
