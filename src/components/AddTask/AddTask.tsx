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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // console.log('add item', inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
    // console.log('key press', inputValue);
  };

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
