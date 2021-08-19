import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { View, Image, Text } from 'react-native'
import mainScreenConfig from '../../../config/mainScreen.config'
import style from './style'
import { Touchable } from '../../../components'
interface IndexProps {
  shops: any[]
}
const Index: React.FC<IndexProps> = props => {
  const { shops } = props
  const { shop_info = [] } = shops[0] || {}
  const { navigate } = useNavigation()
  const detail = useCallback(
    shop_uuid => {
      navigate(mainScreenConfig.ShopPage.name, { shop_uuid })
    },
    [navigate],
  )
  return (
    <View style={style.wrapper}>
      {shop_info.length > 0 && (
        <>
          <View style={style.top}>
            <Image source={require('./assets/tagleft.png')} style={style.tagIcon} />
            <Text style={style.tagText}>喜欢的店</Text>
            <Image source={require('./assets/tagright.png')} style={style.tagIcon} />
          </View>
          <View style={style.catesswrap}>
            {shop_info.map((item: any, index: number) => {
              const { name = '小店', thum = '', uuid: shop_uuid = '' } = item || {}
              return (
                <Touchable
                  style={[
                    index % 4 === 0
                      ? style.cateleft
                      : index % 4 === 3
                      ? style.cateright
                      : style.cate,
                    { marginTop: index > 3 ? 15 : 0 },
                  ]}
                  key={index}
                  onPress={() => {
                    detail(shop_uuid)
                  }}
                >
                  <View style={[style.cateIconWrap]}>
                    <Image
                      source={thum ? { uri: thum } : require('./assets/shop.png')}
                      style={style.cateIcon}
                    />
                    <View style={style.newWraps}>
                      <Text style={style.newText}>又上新</Text>
                    </View>
                    <View style={style.newWraps2}>
                      <Image source={require('./assets/tuangou.png')} style={style.new2} />
                    </View>
                  </View>

                  <Text style={style.cateText}>{name}</Text>
                </Touchable>
              )
            })}
          </View>
        </>
      )}

      <View style={style.top}>
        <Image source={require('./assets/tagleft.png')} style={style.tagIcon} />
        <Text style={style.tagText}>为你推荐</Text>
        <Image source={require('./assets/tagright.png')} style={style.tagIcon} />
      </View>
    </View>
  )
}
export default Index
