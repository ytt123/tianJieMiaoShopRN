import React from 'react'
import { TouchableOpacity } from 'react-native'
interface IndexProps {
  activeOpacity?: number
  style?: any
  onPress?: any
  isflow?: any
}
//防抖  debounce
const Index: React.FC<IndexProps> = props => {
  const { activeOpacity = 0.8, style, onPress, isflow } = props
  let time2
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={style}
      hitSlop={isflow ? { top: 10, bottom: 10, right: 10, left: 10 } : null}
      // hitSlop={hitSlop}
      onPress={() => {
        clearTimeout(time2)
        time2 = setTimeout(() => {
          onPress()
        }, 2000)
      }}
      // {...props}
    >
      {props.children}
    </TouchableOpacity>
  )
}

export default Index
