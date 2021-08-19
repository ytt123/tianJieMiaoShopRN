import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { Touchable, Iconfont } from '../../../components'
interface IndexProps {
  title?: string
  ismore?: boolean
  isFormal?: boolean
  isShowLine?: boolean
  press?: any
  issele?: boolean
}
const Index: React.FC<IndexProps> = props => {
  const { ismore, title = '推荐商品', isShowLine = false, press, issele } = props

  return (
    <View style={[style.wrapper, { borderBottomWidth: isShowLine ? 1 : 0 }]}>
      <Touchable style={style.items} onPress={press}>
        <Text style={style.titleText}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end',
            marginLeft: 10,
          }}
        >
          {ismore ? (
            <Iconfont iconfont={'\ue6a3'} style={style.icon2} />
          ) : (
            <Iconfont
              iconfont={issele ? '\ue656' : '\ue6d7'}
              style={issele ? style.icon1 : style.icon2}
            />
          )}
        </View>
      </Touchable>
    </View>
  )
}

export default Index
