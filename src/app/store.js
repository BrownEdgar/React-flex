import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import countReducer from './countSlice';
import checkDuble from './middleware';

const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkDuble),
});

export default store;

