# 医美用户端

## Dependence

```

// dev
husky lint-staged eslint-plugin-prettier babel-plugin-import eslint-plugin-react-hooks@1.6.1
```

## 配置

```
包名
com.tianjiemiao


```

### 安卓运行不了

```
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 21
        compileSdkVersion = 28
        targetSdkVersion = 28
        androidXCore = "1.0.2"
    }
```

### 安卓生成签名文件

```

```

### 图标库设置

```
// 将 iconfont.ttf 拷贝至 /assets/fonts/ 目录

// 修改 react-native-config.js
module.exports = {
    assets: ['./assets/fonts/']
}

// link
npx react-native link
需要重现运行
```

## 第三方插件

```
@react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/bottom-tabs @react-native-community/async-storage @react-native-community/netinfo @react-navigation/material-top-tabs  react-native-scrollable-tab-view react-native-tab-view  @react-native-community/viewpager

// data
redux react-redux axios immutable redux-immutable redux-thunk

// UI
@expo/react-native-action-sheet react-native-modal @ant-design/react-native react-native-linear-gradient react-native-svg  react-native-qrcode-svg  react-native-htmlview react-native-swiper react-native-loading-spinner-overlay react-native-render-html react-native-webview

react-native-root-siblings
teaset
react-native-amap3d


// third

react-native-wechat-lib

// system
react-native-image-picker react-native-device-info

// dev
husky lint-staged eslint-plugin-prettier babel-plugin-import eslint-plugin-react-hooks@1.6.1

// types
@types/react-redux @types/redux-immutable @types/react-native-scrollable-tab-view @types/react-native-htmlview @types/react-native-loading-spinner-overlay
```

地图的 key 没有配置
ios 关闭bitcode


xcode 升级12报错
问题： Xcode throws 'atomic_notify_one<unsigned long>' is unavailable
解决： use_flipper!({ 'Flipper-Folly' => '2.5.3', 'Flipper' => '0.87.0', 'Flipper-RSocket' => '1.3.1' })
pod repo update
pod install