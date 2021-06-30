import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import directoryReducer from 'Redux/directory.reducer'
import collectionReducer from 'Redux/collection.reducer'
import userReducer from 'Redux/user.reducer'
import cartReducer from 'Redux/cart.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  directory: directoryReducer,
  collection: collectionReducer,
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)
