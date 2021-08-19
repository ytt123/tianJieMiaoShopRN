import {useEffect, useCallback, useState} from 'react';
import {ajax, url} from '../api';
const useIndex = () => {
  const [data, setData] = useState<any>({});

  const [refresing, setRefreshing] = useState(false);
  const getDoctorDetail = useCallback(() => {
    ajax({url: url.get, data: {}})
      .then((res) => {
        const {data} = res;
        setData(data);
      })
      .catch((err) => {});
  }, []);

  const init = useCallback(() => {
    getDoctorDetail();
  }, [getDoctorDetail]);

  useEffect(() => {
    init();
  }, [init]);

  /**
   * 下拉刷新
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    try {
      init();
    } catch (error) {
      setRefreshing(false);
    }
    setRefreshing(false);
  }, [init]);

  return {
    onRefresh,
    refresing,
    data,
  };
};
export default useIndex;
