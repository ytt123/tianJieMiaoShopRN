import React, { useCallback } from 'react'
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import style from './style'
import { Iconfont } from '../../components'
import useIndex from './userIndex'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
import useUser from '../../utils/hooks/useUser'
import useWX from './useWX'
interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const { logoutClick, cleanData, changeClick } = useIndex()

  const { isBind, wechatClick, isBindAccountQueryInLogin } = useWX()
  const { navigate } = useNavigation()

  const { userInfo } = useUser()
  const { mobile } = userInfo?.toJS()

  return (
    <SafeAreaView style={style.wrapper}>
      <ScrollView>
        <TouchableOpacity
          style={[style.item, { marginBottom: 9 }]}
          onPress={() => {
            navigate(mainScreenConfig.Setting.name)
          }}
        >
          <Text style={style.titleText}>个人资料</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.item}
          onPress={() => {
            mobile ? changeClick('changeBind') : changeClick('bind')
          }}
        >
          <Text style={style.titleText}>更换手机号</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item}
          onPress={() => {
            changeClick('changeLogin')
          }}
        >
          <Text style={style.titleText}>修改密码</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.item, { marginBottom: 9 }]}
          onPress={() => {
            wechatClick()
          }}
        >
          <Text style={style.titleText}>第三方绑定</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.item}
          onPress={() => {
            navigate(mainScreenConfig.MyAbout.name, {
              title: '关于我们',
              type_value: 'ABOUT_US',
            })
          }}
        >
          <Text style={style.titleText}>反馈与帮助</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item}
          onPress={() => {
            navigate(mainScreenConfig.MyAbout.name, {
              title: '关于我们',
              type_value: 'ABOUT_US',
            })
          }}
        >
          <Text style={style.titleText}>常见问题</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item}
          onPress={() => {
            navigate(mainScreenConfig.MyAbout.name, {
              title: '关于我们',
              type_value: 'ABOUT_US',
            })
          }}
        >
          <Text style={style.titleText}>关于我们</Text>
          <View style={style.right}>
            <Iconfont iconfont={'\ue6a3'} size={14} style={style.img} />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={style.btnWrap}
        onPress={() => {
          logoutClick()
        }}
      >
        <Text style={style.btnText}>退出当前账号</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Index
