import {useCallback} from 'react';
import {Alert} from 'react-native';
import useRedux from './useRedux';
import mainScreenConfig from '../../config/mainScreen.config';
import {useNavigation} from '@react-navigation/native';
const useIndex = () => {
  const {logout} = useRedux();
  const {navigate} = useNavigation();
  const changeClick = useCallback(
    (type: string) => {
      navigate(mainScreenConfig.SettingChange.name, {type});
    },
    [navigate],
  );
  const logoutClick = useCallback(() => {
    Alert.alert(
      '确认退出登录？',
      undefined,
      [
        {text: '退出', onPress: logout},
        {text: '取消', style: 'cancel'},
      ],
      {
        cancelable: false,
      },
    );
  }, [logout]);

  const cleanData = useCallback(() => {}, []);
  return {
    logoutClick,
    cleanData,
    changeClick,
  };
};

export default useIndex;
