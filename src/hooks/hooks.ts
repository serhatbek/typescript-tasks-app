import { useDispatch, useSelector } from 'react-redux';
import { type TypedUseSelectorHook } from 'react-redux';
import { type RootState, AppDispatch } from '../redux/store';
import { TaskProps } from '../types';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStoreLocally = (taskList: TaskProps[]) => {
  localStorage.setItem('taskList', JSON.stringify(taskList));
};
