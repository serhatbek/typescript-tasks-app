import './TaskItem.scss';
import { type TaskProps } from '../../types';
import { Button, Input } from '../../components/index';
import { RiDeleteBin6Fill, RiEdit2Fill, RiEditBoxFill } from 'react-icons/ri';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import {
  checkedTask,
  deleteTask,
  editTask,
} from '../../redux/Tasks/tasksSlice';

const Task = ({ item }: TaskProps) => {
  const { id, text, isChecked } = item;
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(text);
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    setName(text);
    if (edit) {
      dispatch(
        editTask({
          ...item,
          text: name,
        })
      );
    }
    setEdit(!edit);
  };

  const handleItemChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isTaskChecked = e.target.checked;
    dispatch(
      checkedTask({
        ...item,
        isChecked: isTaskChecked,
      })
    );
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='task-item flex'>
      {edit ? (
        <Input
          value={name}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
      ) : (
        <label className='flex'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleItemChecked}
          />
          <span className='checkmark'></span>
          <span>{text}</span>
        </label>
      )}

      <div className='todo-item__actions flex'>
        <Button
          addClass='btn'
          type='button'
          btnAction={handleEdit}
          iconLeft={edit ? <RiEdit2Fill /> : <RiEditBoxFill />}
        ></Button>
        <Button
          addClass='btn'
          type='button'
          btnAction={() => handleDelete(id)}
          iconLeft={<RiDeleteBin6Fill />}
        ></Button>
      </div>
    </div>
  );
};

export default Task;