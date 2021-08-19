import React from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'
import useIndex from './useIndex'
import { imageMogr } from '../../utils/util'
import { Iconfont, Touchable } from '..'

interface IndexProps {
  title?: number
  setInfo?: any
  index?: number
  setImgs?: any
}

const Index: React.FC<IndexProps> = props => {
  const { setInfo, index, setImgs, title = 0 } = props
  const { addClick, cancelClick, imgs = [] } = useIndex(setInfo, index, setImgs)
  return (
    <View style={style.wrapper}>
      {['1'].concat(imgs).map((item: any, indexs: number) => {
        return (
          <View style={[{ marginLeft: indexs % 4 === 0 ? 0 : 10 }]} key={indexs}>
            {indexs === 0 ? (
              <Touchable activeOpacity={1} onPress={addClick} style={style.addimg}>
                <Iconfont iconfont={'\ue767'} style={style.icon} />
                {title === 1 ? (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={style.titleTetx}>{'上传凭证'}</Text>
                    <Text style={style.titleTetx}>{'最多6张)'}</Text>
                  </View>
                ) : title === 2 ? (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={style.titleTetx}>{'上传<30s'}</Text>
                    <Text style={style.titleTetx}>{'视频'}</Text>
                  </View>
                ) : null}
              </Touchable>
            ) : (
              <View>
                <Image
                  source={
                    item
                      ? { uri: `${item}${imageMogr(220)}` }
                      : require('../../assets/images/default.png')
                  }
                  style={style.img}
                />
                <Touchable
                  style={style.deleteImgWrap}
                  onPress={() => {
                    setInfo && cancelClick(index, indexs)
                    setImgs && cancelClick(index, 0)
                  }}
                >
                  <Image source={require('./assets/deleteimg.png')} style={style.deleteImg} />
                </Touchable>
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default Index
