import { createSlice } from '@reduxjs/toolkit';
import { type PayloadAction } from '@reduxjs/toolkit';
import { type Task, TaskState } from '../../types';

const initialState: TaskState = {
  taskList: [],
};

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.taskList = [...state.taskList, action.payload];
    },
    deleteTask: () => {},
    reset: (state) => {
      state.taskList = [];
    },
  },
});

export const { addTask, deleteTask, reset } = tasksSlice.actions;
export default tasksSlice.reducer;
