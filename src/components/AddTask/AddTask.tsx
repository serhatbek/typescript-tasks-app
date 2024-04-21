import './AddTask.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { Button, Input } from '../../components';
import { useState } from 'react';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // console.log('add item', inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
    // console.log('key press', inputValue);
  };

  const handleAddTask = () => {};

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
