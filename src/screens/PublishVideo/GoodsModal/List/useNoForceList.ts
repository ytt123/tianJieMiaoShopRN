import { useCallback, useState, useEffect } from 'react'
import { ajax } from '../../../../api'
import useSpinner from '../../../../utils/hooks/useSpinner'
/**
 * 获取列表
 * @param page
 */
export const listGet = async (url: string, page: any, map: string) => {
  try {
    return ajax({
      url,
      data: {
        page,
        map,
        // query_condition: {},
        // sort,
      },
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

const paginationDefault = {
  page_num: 1,
  page_limit: 10,
  data_count: 0,
}

const useIndex = (url: string, map?: any) => {
  const [list, setList] = useState<any[]>([])
  const [refresing, setRefreshing] = useState(false)
  const [pagination, setPagination] = useState(paginationDefault)
  const [bottomLoading, setBottomLoading] = useState(false)
  const [empty, setEmpty] = useState(false)
  const [isloaded, setIsloaded] = useState(false) //是否加载完
  const { spinningChange } = useSpinner()
  /**
   * 下拉刷新
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    listGet(url, paginationDefault, map)
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
  }, [map, url])

  useEffect(() => {
    spinningChange(true)
    listGet(url, paginationDefault, map)
      .then(res => {
        const { data = [], page = {} } = res
        spinningChange(false)
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
        spinningChange(false)
        setRefreshing(false)
      })
  }, [map, spinningChange, url])

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
        map,
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
    map,
    pagination.data_count,
    pagination.page_limit,
    pagination.page_num,
    refresing,
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
  }
}

export default useIndex
