import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import progressReducer from './progressSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    progress: progressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
