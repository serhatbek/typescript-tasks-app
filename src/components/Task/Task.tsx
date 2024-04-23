import { type Task } from '../../types';
import { Button } from '../../components/index';
import './Task.scss';
import { RiDeleteBin6Fill, RiEdit2Fill, RiEditBoxFill } from 'react-icons/ri';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteTask } from '../../redux/Tasks/tasksSlice';

const Task = (props) => {
  const { id, text, isChecked } = props.taskItem;
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();

  const handleEdit = () => {};

  const handleItemChecked = () => {};

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='todo-item flex'>
      <label className='container'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleItemChecked}
        />
        <span className='checkmark'></span>
        <span>{text}</span>
      </label>

      <div className='todo-item__actions flex'>
        <Button
          type='button'
          btnAction={handleEdit}
          iconLeft={edit ? <RiEdit2Fill /> : <RiEditBoxFill />}
        ></Button>
        <Button
          type='button'
          btnAction={() => handleDelete(id)}
          iconLeft={<RiDeleteBin6Fill />}
        ></Button>
      </div>
    </div>
  );
};

export default Task;
