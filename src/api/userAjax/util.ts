import { AxiosRequestConfig } from 'axios'
import { getStorage, StorageKey } from '../../utils/storage'

export const packageAxiosRequestConfig = async (arc: AxiosRequestConfig) => {
  try {
    arc.headers = arc.headers || {}
    const tokenInfo = await getStorage(StorageKey.TOKEN_INFO)
    const simMachineCode = await getStorage(StorageKey.SIM_MACHINE_CODE)
    if (tokenInfo?.token) {
      Object.assign(arc.headers, { Token: tokenInfo.token })
    }
    if (simMachineCode) {
      Object.assign(arc.headers, { 'Machine-Code': simMachineCode })
    }
  } catch (error) {
    return Promise.reject()
  }
}
