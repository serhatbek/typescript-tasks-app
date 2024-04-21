import { createSlice } from '@reduxjs/toolkit';
import { type PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  taskList: [],
};

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: () => {},
    deleteTask: () => {},
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
