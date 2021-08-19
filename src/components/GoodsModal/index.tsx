import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style'
import Iconfont from '../Iconfont'
import { useSafeArea } from 'react-native-safe-area-context'
import Stepper from './Stepper'
import { imageMogr } from '../../utils/util'
import { Toast } from '@ant-design/react-native'
interface IndexProps {
  setVisible: any
  addClick?: any
  sureClick?: any
  itemClick: any
  data: any
  setNum?: any
}
const Index: React.FC<IndexProps> = props => {
  const { bottom } = useSafeArea()

  const { addClick, sureClick, itemClick, data, setNum, setVisible } = props
  const { updateInfo, num, dafaults } = data || {}

  const { spec_info = [] } = dafaults || {}
  const { content = [] } = spec_info || {}

  const { stock, thum: thums, sell_price } = dafaults || {}
  const { titles, stock: stocks, thum, sell_price: sell_prices, isover } = updateInfo || {}

  return (
    <View style={[{ marginBottom: bottom }]}>
      <View style={style.popWrap}>
        <View style={style.top}>
          <Text style={{}}>商品规格</Text>
          <TouchableOpacity
            onPress={() => {
              setVisible(false)
            }}
          >
            <Iconfont iconfont={'\ue610'} size={23} style={{ color: '#8b9b9b' }} />
          </TouchableOpacity>
        </View>

        <View style={style.goodsWrap}>
          <Image
            source={
              thum
                ? { uri: `${thum}${imageMogr(220)}` }
                : thums
                ? { uri: `${thums}${imageMogr(220)}` }
                : require('../../assets/images/default.png')
            }
            style={style.specimg}
          />
          <View style={style.goodsInfoWrap}>
            <Text style={style.priceText}>¥{sell_prices ? sell_prices : sell_price}</Text>
            {!!titles && titles.split('_').indexOf('0') === -1 && (
              <Text style={[style.specTitle, style.margins]}>已选：{titles}</Text>
            )}

            <Text style={style.specTitle}>库存：{isover ? +stocks : stock}</Text>
          </View>
        </View>
        <View style={style.spcesContain}>
          {content.map((item: any, index: number) => {
            const { name, options } = item || {}
            const value1 = titles.split('_')[index]
            return (
              <View style={style.spceContain}>
                <Text style={style.specTitle}>{name}</Text>
                <View style={style.spceWrap}>
                  {options.map((items: any, indexs: number) => {
                    const { name } = items || {}
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          itemClick(index, name)
                        }}
                      >
                        <Text
                          style={value1 === name ? style.seleSpecText : style.specText}
                          key={index}
                        >
                          {name}
                        </Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </View>
            )
          })}
        </View>

        {!!setNum && (
          <View style={style.stepperWrap}>
            <Text style={style.specTitle}>购买数量</Text>
            <Stepper num={num} setNum={setNum} />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={style.btnWrap}
        onPress={() => {
          if (+stocks === 0) {
            Toast.show('此规格暂无库存')
            return
          }
          setNum ? addClick() : sureClick()
        }}
      >
        <Text style={style.btnText}>
          {+stocks === 0 ? '此规格暂无库存' : setNum ? '立即兑换' : '确认'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index
