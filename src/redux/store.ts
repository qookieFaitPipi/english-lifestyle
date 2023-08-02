import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// slices
import reviewSlice from './slices/reviewSlice';
import videoSlice from './slices/videoSlice';
import sliderSlice from './slices/sliderSlice';
import priceSlice from './slices/priceSlice';

// redux-persist
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import adminSlice from './slices/adminSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  reviewSlice: reviewSlice,
  videoSlice: videoSlice,
  sliderSlice: sliderSlice,
  priceSlice: priceSlice,
  adminSlice: adminSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();