import React from 'react'
import { View } from 'react-native'
import style from './style'
import Video from 'react-native-video'

import { videoVframe } from '../../utils/util'
interface IndexProps {
  uri: string
  styles?: any
}

const Index: React.FC<IndexProps> = props => {
  const { uri, styles } = props
  // const video = useRef<any>(null)
  // const [state, setState] = useState({
  //   rate: 1,
  //   volume: 1,
  //   muted: false,
  //   resizeMode: 'contain',
  //   duration: 0.0,
  //   currentTime: 0.0,
  //   paused: true,
  // })

  return (
    <View style={style.wrapper}>
      {!!uri && (
        <Video
          style={styles ? styles : style.icon}
          source={{ uri: uri }}
          poster={`${uri}${videoVframe({ w: 750 })}`}
          resizeMode="contain"
          controls
          paused
          // onBuffer={() => {
          //   console.log('缓冲')
          // }}
          // onLoadStart={() => console.log('缓冲')}
        />
      )}
    </View>
  )
}

export default Index
