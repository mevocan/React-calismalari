import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import islemReducer from "../features/islem/islemSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    islem:islemReducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false
    })
});
