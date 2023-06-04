import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopsReducer from './shops/shopsSlice';
import goodsReducer from './goods/goodsSlice';
import ordersReducer from './orders/ordersSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['orders'],
};

const persistedOrdersReducer = persistReducer(persistConfig, ordersReducer);

export const rootReducer = combineReducers({
  shops: shopsReducer,
  goods: goodsReducer,
  orders: persistedOrdersReducer,
});
