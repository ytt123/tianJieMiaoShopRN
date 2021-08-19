import { combineReducers } from 'redux-immutable'
import { reducer as initialReducer } from '../initialReducer'
import { reducer as orderInitReducer } from '../orderInitReducer'
// import { reducer as homeReducer } from '../../screens/Home/store'

const createReducer = (aysncReducers: any) => {
  return combineReducers({
    ...aysncReducers,
    init: initialReducer,
    orderinit: orderInitReducer,
    // Home: homeReducer,
  })
}

export default createReducer
