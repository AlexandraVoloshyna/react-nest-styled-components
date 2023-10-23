import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice';
import authReducer from './authSlice.js'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})