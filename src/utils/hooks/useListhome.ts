import { useCallback, useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { ajax } from '../../api'

/**
 * 获取列表
 * @param page
 */
export const listGet = async (
  url: string,
  page: any,
  map: any = {},
  queryCondition: any = {},
  sort: any,
) => {
  try {
    return ajax({
      url,
      data: sort
        ? {
            page,
            map,
            query_condition: queryCondition,
            sort,
          }
        : {
            page,
            map,
            query_condition: queryCondition,
          },
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

const paginationDefault = {
  page_num: 1,
  page_limit: 30,
  data_count: 0,
}

const useIndex = (params: any) => {
  const { url, map: mapDefault, query_condition: queryCondition, sort } = params || {}

  const [list, setList] = useState<any[]>([])
  const [refresing, setRefreshing] = useState(false)
  const [pagination, setPagination] = useState(paginationDefault)
  const [bottomLoading, setBottomLoading] = useState(false)
  const [empty, setEmpty] = useState(false)
  const [isloaded, setIsloaded] = useState(false) //是否加载完
  const [isReload, setIsReload] = useState(false) //是否切换新数据
  /**
   * 下拉刷新
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true)

    listGet(url, paginationDefault, mapDefault, queryCondition, sort)
      .then(res => {
        const { data, page } = res
        setRefreshing(false)
        setList(data)
        setPagination(page)
        if (page.page_num === 1 && data.length === 0) {
          setEmpty(true)
        } else {
          setEmpty(false)
        }
      })
      .catch(err => {
        setRefreshing(false)
      })
  }, [mapDefault, queryCondition, sort, url])

  useEffect(() => {
    listGet(url, paginationDefault, mapDefault, queryCondition, sort)
      .then(res => {
        const { data = [], page = {} } = res
        setRefreshing(false)
        setList(data)
        setPagination(page)
        setIsReload(true)
        if (page.page_num === 1 && data.length === 0) {
          setEmpty(true)
        } else {
          setEmpty(false)
        }
      })
      .catch(err => {
        setIsReload(true)
        setRefreshing(false)
      })
  }, [isReload, mapDefault, queryCondition, sort, url])
  // useFocusEffect(
  //   useCallback(() => {
  //     listGet(url, paginationDefault, mapDefault, queryCondition, sort)
  //       .then(res => {
  //         const { data = [], page = {} } = res
  //         setRefreshing(false)
  //         setList(data)
  //         setPagination(page)
  //         if (page.page_num === 1 && data.length === 0) {
  //           setEmpty(true)
  //         } else {
  //           setEmpty(false)
  //         }
  //       })
  //       .catch(err => {
  //         setRefreshing(false)
  //       })
  //   }, [mapDefault, queryCondition, sort, url]),
  // )

  /**
   * 上拉加载
   */
  const onEndReached = useCallback(() => {
    if (!refresing && !bottomLoading && pagination.data_count > list.length) {
      setBottomLoading(true)

      listGet(
        url,
        {
          page_num: pagination.page_num + 1,
          page_limit: pagination.page_limit,
        },
        mapDefault,
        queryCondition,
        sort,
      )
        .then(res => {
          setBottomLoading(false)
          setPagination(res.page)
          setList(preList => [...preList, ...res.data])
        })
        .catch(err => {
          setBottomLoading(false)
        })
    } else {
      setIsloaded(true)
    }
  }, [
    bottomLoading,
    list.length,
    mapDefault,
    pagination.data_count,
    pagination.page_limit,
    pagination.page_num,
    queryCondition,
    refresing,
    sort,
    url,
  ])

  /**
   * 改变一项
   */
  const listChangeByIndex = useCallback(
    (index: number, data: any) => {
      const newList = [...list]
      newList[index] = data
      setList(newList)
    },
    [list],
  )

  /**
   * 删除一项
   */
  const deleteByIndex = useCallback(
    index => {
      const newList = [...list]
      newList.splice(index, 1)
      setList(newList)
      setEmpty(newList.length === 0)
    },
    [list],
  )

  const set0 = useCallback(() => {
    setList([])
  }, [])

  return {
    list,
    refresing,
    onRefresh,
    onEndReached,
    bottomLoading,
    empty,
    listChangeByIndex,
    deleteByIndex,
    pagination,
    isloaded,
    isReload,
    set0,
  }
}

export default useIndex
