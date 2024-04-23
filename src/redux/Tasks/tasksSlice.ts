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
    deleteTask: (state, action: PayloadAction<string>) => {
      const updatedTaskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
      state.taskList = updatedTaskList;
    },
    editTask: () => {},
    isTaskChecked: () => {},
    reset: (state) => {
      state.taskList = [];
    },
    filterTaskList: () => {},
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  isTaskChecked,
  reset,
  filterTaskList,
} = tasksSlice.actions;
export default tasksSlice.reducer;
