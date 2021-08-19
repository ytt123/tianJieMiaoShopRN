import React, { useRef, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import style from './style'
import List from './List'
import ReturnList from './ReturnList'

//@ts-ignore
import { SegmentedBar, Carousel } from 'teaset'
import Top from './Top'
import TabText from './Text'
import useUser from '../../utils/hooks/useUser'
import { Empty } from '../../components'
const typeArray = ['正常订单', '售后订单']

interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const CarouselRef = useRef<any>(null)
  const [tabIndex, setTabIndex] = useState(0)
  const [time, selectTime] = useState<any>({})
  const [timeBack, selectTimeBack] = useState<any>({})

  const { user_type = '', userOnline } = useUser()
  const isAgent = user_type.indexOf('AGENT') > -1
  return (
    <SafeAreaView style={style.wrapper}>
      <SegmentedBar
        style={style.seg}
        onChange={(index: number) => {
          setTabIndex(index)
          CarouselRef.current.scrollToPage(index, false)
        }}
        activeIndex={tabIndex}
      >
        {typeArray.map((cur, index: number) => {
          return <TabText text={cur} key={index} isSele={index === tabIndex} />
        })}
      </SegmentedBar>

      <Carousel
        style={style.wrapper}
        carousel={false}
        cycle={false}
        scrollEnabled={false}
        ref={CarouselRef}
        startIndex={tabIndex}
      >
        <View style={style.wrapper}>
          <Top selectTime={selectTime} />
          {userOnline ? (
            <List query={{ ...time, status_flag: 'WAIT_DELIVER_GOODS' }} isAgent={isAgent} />
          ) : (
            <Empty />
          )}
        </View>
        <View style={style.wrapper}>
          <Top selectTime={selectTimeBack} />
          {userOnline ? <ReturnList query={{ ...timeBack }} /> : <Empty />}
        </View>
      </Carousel>
    </SafeAreaView>
  )
}

export default Index
