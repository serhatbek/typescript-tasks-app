import './AddTask.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { Button, Input } from '../../components';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { addTask } from '../../redux/Tasks/tasksSlice';
import { nanoid } from 'nanoid';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    //NOTE - trim removes white spaces from start and end
    if (inputValue.trim() !== '') {
      dispatch(
        addTask({
          id: nanoid(),
          text: inputValue,
          isChecked: false,
        })
      );
    }
    setInputValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='add-todo background'>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Add Task'
        type='text'
      />
      <Button
        btnAction={handleAddTask}
        type='button'
        addClass='btn'
        iconLeft={<IoMdAddCircle />}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
