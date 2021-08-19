import React, {useEffect, useState} from 'react';
import {Modal} from '@ant-design/react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import style from './style';
import {getStorage, StorageKey, setStorage} from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';
import mainScreenConfig from '../../config/mainScreen.config';
interface IndexProps {}
const Index: React.FC<IndexProps> = (props) => {
  const {navigate} = useNavigation();
  const [value, setValue] = useState(false);
  const [permissionShow, setPermissionShow] = useState(false);

  return (
    <View style={style.wrapper}>
      <View style={{alignItems: 'center'}}>
        <Image source={require('./icon.png')} style={style.icon} />
      </View>
    </View>
  );
};

export default Index;
