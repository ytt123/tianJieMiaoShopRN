import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createReducer from './utils/createReducer'

// chrome 插件扩展
// const enhancers: any[] = []
// if (
//   process.env.NODE_ENV === 'development' &&
//   Object.prototype.hasOwnProperty.call(window, '__REDUX_DEVTOOLS_EXTENSION__')
// ) {
//   enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__({}))
// }

// store
const store: any = createStore(createReducer({}), compose(applyMiddleware(thunk)))
Object.assign(store, { asyncReducers: {} })

export default store
