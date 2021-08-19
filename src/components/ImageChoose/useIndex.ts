import { useCallback, useState } from 'react'
import { showImagePicker } from '../../utils/fs/imageSelect'
import useSpinner from '../../utils/hooks/useSpinner'
import { qiniuFileUpload } from '../../utils/file'
import useUser from '../../utils/hooks/useUser'
const useIndex = (setInfo: any, index: any, setImgs: any) => {
  const { spinningChange } = useSpinner()
  const { shopUuid = '' } = useUser()
  const [imgs, setImgs_] = useState<any>([])
  const addClick = useCallback(async () => {
    const imageRes = await showImagePicker('photo')
    spinningChange(true)
    const avatarRes = await qiniuFileUpload(imageRes, shopUuid)
    spinningChange(false)
    const newImgs = [...imgs]
    newImgs.push(avatarRes.url)
    setImgs_(newImgs)
    setInfo &&
      setInfo((pre: any[]) => {
        const copy = [...pre]
        const it = copy[index]
        it.imgs = newImgs
        copy[index] = it
        return copy
      })
    setImgs && setImgs(newImgs)
  }, [imgs, index, setImgs, setInfo, shopUuid, spinningChange])
  const cancelClick = useCallback(
    (index, indexs) => {
      const newImgs = [...imgs]
      newImgs.splice(index, 1)
      setImgs_(newImgs)

      setInfo &&
        setInfo((pre: any[]) => {
          const copy = [...pre]
          const it = copy[index]
          const imgs = it.imgs
          imgs.splice(indexs, 1)
          it.imgs = imgs
          copy[index] = it
          return copy
        })
      setImgs && setImgs(newImgs)
    },
    [imgs, setImgs, setInfo],
  )
  return {
    addClick,
    cancelClick,
    imgs,
  }
}
export default useIndex
