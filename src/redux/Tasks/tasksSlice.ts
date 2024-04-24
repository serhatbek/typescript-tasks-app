import { createSlice } from '@reduxjs/toolkit';
import { type PayloadAction } from '@reduxjs/toolkit';
import { type TaskProps, TaskState } from '../../types';
import { useStoreLocally } from '../../hooks/hooks';

const storedTaskList = localStorage.getItem('taskList');
const initialState: TaskState = {
  taskList: storedTaskList ? JSON.parse(storedTaskList) : [],
};

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskProps>) => {
      state.taskList = [...state.taskList, action.payload];
      useStoreLocally(state.taskList);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const updatedTaskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
      state.taskList = updatedTaskList;
      useStoreLocally(state.taskList);
    },
    editTask: (state, action: PayloadAction<TaskProps>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      useStoreLocally(state.taskList);
    },
    checkedTask: (state, action: PayloadAction<TaskProps>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      useStoreLocally(state.taskList);
    },
    resetTask: (state) => {
      state.taskList = [];
      useStoreLocally(state.taskList);
    },
  },
});

export const { addTask, deleteTask, editTask, checkedTask, resetTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
