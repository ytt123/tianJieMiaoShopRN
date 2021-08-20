import { useState } from 'react'

const useIndex = (goodsArr: any[]) => {
  const [visibleGoods, setVisibleGoods] = useState(false)
  const [visibleAdjust, setVisibleAdjust] = useState(false)
  const [info, setInfo] = useState<any>(goodsArr)
  return { visibleGoods, setVisibleGoods, info, setInfo, visibleAdjust, setVisibleAdjust }
}

export default useIndex
