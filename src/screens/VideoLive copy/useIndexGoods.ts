import { useState } from 'react'

const useIndex = (goodsinfo: any) => {
  const [visibleGoods, setVisibleGoods] = useState(false)
  const [visibleRecomGoods, sertVisibleRecomGoods] = useState(false)
  const [visibleAdjust, setVisibleAdjust] = useState(false)
  const [info] = useState<any>(goodsinfo?.goods_uuids)

  const [recominfo] = useState<any>(goodsinfo?.recomgoods_uuids)

  return {
    visibleGoods,
    setVisibleGoods,
    info,
    recominfo,
    visibleAdjust,
    setVisibleAdjust,
    visibleRecomGoods,
    sertVisibleRecomGoods,
  }
}

export default useIndex
