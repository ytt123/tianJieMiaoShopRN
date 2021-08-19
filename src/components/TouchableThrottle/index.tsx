import React from 'react'
import { TouchableOpacity } from 'react-native'
interface IndexProps {
  activeOpacity?: number
  style?: any
  onPress?: any
  isflow?: any
}
//节流 throttle
const Index: React.FC<IndexProps> = props => {
  const { activeOpacity = 0.8, style, onPress, isflow } = props
  let bool = true
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={style}
      hitSlop={isflow ? { top: 10, bottom: 10, right: 10, left: 10 } : null}
      // hitSlop={hitSlop}
      onPress={() => {
        if (bool) {
          onPress()
          bool = false
          setTimeout(() => {
            bool = true
          }, 2000)
        }
      }}
      // {...props}
    >
      {props.children}
    </TouchableOpacity>
  )
}

export default Index
