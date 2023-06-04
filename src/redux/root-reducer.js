import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import shopsReducer from './shops/shopsSlice';
import goodsReducer from './goods/goodsSlice';
import ordersReducer from './orders/ordersSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  shops: shopsReducer,
  goods: goodsReducer,
  orders: ordersReducer,
});
