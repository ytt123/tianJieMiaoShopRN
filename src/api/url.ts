import { url as userUrl } from './userAjax'
import { url as commonUrl } from './commonAjax'

export default {
  ...userUrl,
  ...commonUrl,
}
