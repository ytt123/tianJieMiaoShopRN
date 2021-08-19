import React from 'react';
import {View} from 'react-native';
import style from './style';
import {Iconfont} from '../../../components';

interface IndexProps {
  score: number;
}
const list = Array(5).fill('1');
const Index: React.FC<IndexProps> = (props) => {
  const {score} = props;
  return (
    <View style={style.wrapper}>
      {list.map((item, index) => {
        return (
          <Iconfont
            key={index}
            iconfont={'\ue64b'}
            style={index < score ? style.selestar : style.star}
          />
        );
      })}
    </View>
  );
};

export default Index;
