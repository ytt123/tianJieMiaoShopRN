import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Iconfont} from '../../../components';
import mainScreenConfig from '../../../config/mainScreen.config';
import style from './style';

interface IndexProps {}
const Index: React.FC<IndexProps> = (props) => {
  const {} = props;

  const {navigate} = useNavigation();
  const detail = useCallback(
    (type) => {
      navigate(mainScreenConfig.VideosList.name, {type});
    },
    [navigate],
  );
  return (
    <View style={style.wrapper}>
      <View style={style.top}>
        <View style={style.item}>
          <Iconfont
            iconfont={'\ue6bf'}
            style={{fontSize: 18, marginRight: 5}}
          />
          <Text>直播频道 </Text>
        </View>

        <View style={style.item}>
          <Iconfont
            iconfont={'\ue708'}
            style={{fontSize: 24, marginRight: 5}}
          />
          <Text>秀圈风彩 </Text>
        </View>
      </View>

      <View style={style.videoWrap}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            detail('live');
          }}>
          <Image
            source={require('./assets/icon.png')}
            style={style.videoItem}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            detail('video');
          }}>
          <Image
            source={require('./assets/icon.png')}
            style={style.videoItem}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
