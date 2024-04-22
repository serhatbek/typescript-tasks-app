import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    Tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
