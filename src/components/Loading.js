/**
 * Created by xiaoxing on 2019-09-17.
 */
import React from 'react'
import RootSiblings from 'react-native-root-siblings'
import Spinner from 'react-native-loading-spinner-overlay'

let loadRef
export class Loading {
  static show = () => {
    loadRef = new RootSiblings(
      (
        <Spinner
          visible={true}
          // textContent={'正在拼命加载...'}
          // textStyle={{ color: '#69696c', marginTop: 0 }}
          overlayColor={'rgba(0, 0, 0, 0)'}
          color={'#69696c'}
          cancelable={true}
        />
      ),
    )
  }
  static hide = () => {
    loadRef.destroy()
  }
}
