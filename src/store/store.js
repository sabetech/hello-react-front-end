import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './createSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
