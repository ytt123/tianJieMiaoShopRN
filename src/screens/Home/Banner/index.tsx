import React from 'react'
import { View, Image } from 'react-native'
import style from './style'
import { Carousel } from 'teaset'
import { imageMogr } from '../../../utils/util'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const {} = props
  const banners = [0, 0, 0]
  return (
    <View style={style.wrapper}>
      <Carousel
        style={style.banner}
        carousel={false}
        cycle={false}
        control={
          <Carousel.Control
            style={{ alignItems: 'center' }}
            dot={
              <View
                style={{
                  backgroundColor: '#d8d8d8',
                  height: 4,
                  width: 4,
                  marginRight: 10,
                  borderRadius: 2,
                  marginBottom: 5,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: 'red',
                  height: 4,
                  width: 4,
                  marginRight: 10,
                  borderRadius: 2,
                  marginBottom: 5,
                }}
              />
            }
          />
        }
      >
        {banners.map((item: any, index: number) => {
          return (
            <Image
              key={index}
              source={item ? { uri: `${item}${imageMogr(700)}` } : require('./assets/banner.png')}
              style={style.bannerimg}
            />
          )
        })}
      </Carousel>
    </View>
  )
}

export default Index
