import { combineReducers } from '@reduxjs/toolkit';
import { configureStore as configureStoreRTK } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, Persistor } from 'redux-persist';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { wishlistSlice } from './slices/wishlistSlice';
import { compareSlice } from './slices/compareSlice';
import { authSlice } from './slices/authSlice';
import { apiSlice } from './api';
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['api'] // api will not be persisted
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  cart: cartSlice.reducer,
  auth: authSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  wishlist: wishlistSlice.reducer,
  compare: compareSlice.reducer,
}));

// Configure Redux store
const store = configureStoreRTK({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppPersistor = Persistor;

// Create persistor
export const persistor = persistStore(store);

export default store;
