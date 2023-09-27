import { configureStore } from '@reduxjs/toolkit';
import habitReducer from '../redux/habitReducer';

export const store = configureStore({
  reducer: {
     habitReducer
  },
});
