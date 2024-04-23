import { createSlice } from '@reduxjs/toolkit';
import { type PayloadAction } from '@reduxjs/toolkit';
import { type TaskProps, TaskState } from '../../types';

const initialState: TaskState = {
  taskList: [],
};

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskProps>) => {
      state.taskList = [...state.taskList, action.payload];
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const updatedTaskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
      state.taskList = updatedTaskList;
    },
    editTask: (state, action: PayloadAction<TaskProps>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    checkedTask: (state, action: PayloadAction<TaskProps>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      //   state.taskList = updatedTaskList;
    },
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
  checkedTask,
  reset,
  filterTaskList,
} = tasksSlice.actions;
export default tasksSlice.reducer;
