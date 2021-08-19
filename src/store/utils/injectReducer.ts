import createReducer from './createReducer'

const injectReducer = (store: any, { key, reducer }: any) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  }
  store.asyncReducers[key] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}

export default injectReducer
