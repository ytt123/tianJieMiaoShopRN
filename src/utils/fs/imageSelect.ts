import ImagePicker, { ImagePickerResponse, ImagePickerOptions } from 'react-native-image-picker'
// import { Platform } from 'react-native'
/**
 * 文件选择
 */

export const showImagePicker = async (
  mediaType: 'photo' | 'video',
): Promise<ImagePickerResponse> => {
  let options: ImagePickerOptions = {
    permissionDenied: {
      title: '权限提示',
      text: '请打开您的相册使用权限，来使用你的相机拍摄照片，并从你的图库中选择。',
      reTryTitle: '重试',
      okTitle: '知道了',
    },
  }
  if (mediaType === 'photo') {
    options = {
      ...options,
      quality: 0.5,
      title: '选择一张照片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从手机相册中选择',
      mediaType: 'photo',
    }
  } else {
    options = {
      ...options,
      title: '选择一个视频',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍摄',
      chooseFromLibraryButtonTitle: '从手机相册中选择',
      mediaType: mediaType,
      durationLimit: 30,
      // videoQuality: Platform.OS === 'android' ? 'medium' : undefined,
    }
  }

  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker')
        reject(response)
      } else if (response.error) {
        reject(response)
        // console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        reject(response)
        // console.log('User tapped custom button: ', response.customButton)
      } else {
        resolve(response)
      }
    })
  })
}
