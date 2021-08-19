import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import action from '../../store/orderInitReducer/action'

const useInvoice = () => {
  const dispatch = useDispatch()
  const orderinfo = useSelector<any, any>(state => state.getIn(['orderinit', 'orderInit']))
  const addressInfo = useSelector<any, any>(state => state.getIn(['orderinit', 'addressInfo']))

  const changeOrderInit = useCallback(
    data => {
      dispatch(action.changeOrderInit(data))
    },
    [dispatch],
  )
  const resetOrderInit = useCallback(() => {
    dispatch(action.resetOrderInit())
  }, [dispatch])

  const changeAddressInfo = useCallback(
    data => {
      dispatch(action.changeAddressInfo(data))
    },
    [dispatch],
  )
  const resetAddressInfo = useCallback(() => {
    dispatch(action.resetAddressInfo())
  }, [dispatch])
  //积分订单
  const scoreOrderInit = useSelector<any, any>(state =>
    state.getIn(['orderinit', 'scoreOrderInit']),
  )

  const updateScoreOrderInfo = useCallback(
    data => {
      dispatch(action.updateScoreOrderInfo(data))
    },
    [dispatch],
  )

  const resetScoreOrderInfo = useCallback(() => {
    dispatch(action.resetScoreOrderInfo())
  }, [dispatch])

  //服务订单
  const serviceOrderInit = useSelector<any, any>(state =>
    state.getIn(['orderinit', 'serviceOrderInit']),
  )

  const updateServiceOrderInfo = useCallback(
    data => {
      dispatch(action.updateServiceOrderInfo(data))
    },
    [dispatch],
  )
  const resetServiceOrderInfo = useCallback(() => {
    dispatch(action.resetServiceOrderInfo())
  }, [dispatch])

  //购物车订单
  const carOrderInit = useSelector<any, any>(state => state.getIn(['orderinit', 'carOrderInit']))

  const updateCarOrderInfo = useCallback(
    data => {
      dispatch(action.updateCarOrderInfo(data))
    },
    [dispatch],
  )
  const resetCarOrderInfo = useCallback(() => {
    dispatch(action.resetCarOrderInfo())
  }, [dispatch])

  //咨询订单
  const consultationOrderInit = useSelector<any, any>(state =>
    state.getIn(['orderinit', 'consultationOrderInit']),
  )

  const updateConsultationOrderInfo = useCallback(
    data => {
      dispatch(action.updateConsultationOrderInfo(data))
    },
    [dispatch],
  )
  const resetConsultationOrderInfo = useCallback(() => {
    dispatch(action.resetConsultationOrderInfo())
  }, [dispatch])

  return {
    changeOrderInit,
    orderinfo,
    resetOrderInit,
    addressInfo,
    changeAddressInfo,
    resetAddressInfo,
    //积分订单相关
    scoreOrderInit,
    updateScoreOrderInfo,
    resetScoreOrderInfo,
    //服务订单相关
    serviceOrderInit,
    updateServiceOrderInfo,
    resetServiceOrderInfo,
    //购物车订单
    carOrderInit,
    updateCarOrderInfo,
    resetCarOrderInfo,
    //咨询单
    consultationOrderInit,
    updateConsultationOrderInfo,
    resetConsultationOrderInfo,
  }
}

export default useInvoice
