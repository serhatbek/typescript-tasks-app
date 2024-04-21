import './AddTask.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { Button, Input } from '../../components';
import { useState } from 'react';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log('add item', inputValue);
  };

  const handleKeyPress = () => {
    console.log('key press');
  };

  return (
    <div className='add-todo'>
      <Input
        value={inputValue}
        onChange={() => handleAddTask}
        onKeyDown={handleKeyPress}
        placeholder='Add Task'
        type='text'
      />
      <Button
        btnAction={() => handleAddTask}
        type='button'
        iconLeft={<IoMdAddCircle />}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
