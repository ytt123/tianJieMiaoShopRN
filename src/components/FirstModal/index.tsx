import React, { useEffect, useState } from 'react'
import { Modal } from '@ant-design/react-native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import style from './style'
import { getStorage, StorageKey, setStorage } from '../../utils/storage'
import { useNavigation } from '@react-navigation/native'
import mainScreenConfig from '../../config/mainScreen.config'
interface IndexProps {}
const Index: React.FC<IndexProps> = props => {
  const { navigate } = useNavigation()
  const [value, setValue] = useState(false)
  const [permissionShow, setPermissionShow] = useState(false)

  useEffect(() => {
    getStorage(StorageKey.FIRST_LOGIN)
      .then(value => {
        const hasAuth = value === null
        hasAuth &&
          setTimeout(() => {
            setValue(hasAuth)
          }, 2000)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <View>
      <Modal
        transparent
        maskClosable
        visible={value}
        onClose={() => {
          setValue(false)
        }}
      >
        <View>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('./icon.png')} style={style.icon} />
          </View>

          <Text style={style.title}>欢迎来到壹品一美</Text>
          <Text style={style.des}>尊敬的用户：</Text>
          <Text style={style.des}>
            欢迎使用“壹品一美APP”，请您使用前仔细阅读
            <Text
              style={style.dealTetx}
              onPress={() => {
                setValue(false)
                navigate(mainScreenConfig.MyAbout.name, {
                  title: '壹品一美隐私政策',
                  type_value: 'PRIVACY_POLICY',
                })
              }}
            >
              《壹品一美隐私政策》
            </Text>
            和
            <Text
              style={style.dealTetx}
              onPress={() => {
                setValue(false)
                navigate(mainScreenConfig.MyAbout.name, {
                  title: '壹品一美用户协议',
                  type_value: 'USER_AGREEMENT_USER',
                })
              }}
            >
              《壹品一美用户协议》
            </Text>
            ，壹品一美将严格遵守隐私政策和用户协议各项约定条款，保护您的个人信息，确保信息安全，点击”同意“即意味着您认同并遵守《壹品一美隐私政策》和《壹品一美用户协议》。
          </Text>

          <View style={style.boms}>
            <TouchableOpacity
              onPress={() => {
                setStorage(StorageKey.FIRST_LOGIN, false)
                setValue(false)
              }}
            >
              <Text style={style.btnText}>不同意，仅浏览</Text>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity
              onPress={() => {
                setStorage(StorageKey.FIRST_LOGIN, false)
                setValue(false)
                setPermissionShow(true)
              }}
            >
              <Text style={style.btnsText}>同意</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* // */}
      <Modal
        transparent
        maskClosable
        visible={permissionShow}
        onClose={() => {
          setPermissionShow(false)
        }}
      >
        <View>
          <Text style={style.pheadText}>温馨提示</Text>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('./icon2.png')} style={style.icon} />
          </View>
          <Text style={style.ptitleText}>为了向您提供优质的内容与服务，将请您申请以下权限</Text>
          <View>
            <Text style={style.ptitleText}>-消息通知权限</Text>
            <Text style={style.pdesText}>
              “通知”可能包括提醒、声音和图标标记。这些可在“设置”中配置
            </Text>
          </View>
          <View>
            <Text style={style.ptitleText}>-定位信息</Text>
            <Text style={style.pdesText}>根据您的定位信息推荐附近的医院和医师</Text>
          </View>
          <View>
            <Text style={style.ptitleText}>-存储权限</Text>
            <Text style={style.pdesText}>实现您拍照的图片保存、取用上传</Text>
          </View>

          <View style={style.boms}>
            <TouchableOpacity
              onPress={() => {
                setPermissionShow(false)
              }}
            >
              <Text style={style.btnsText}>下一步</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Index
