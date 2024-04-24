import './TaskFooter.scss';
import { Button } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { resetTask } from '../../redux/Tasks/tasksSlice';

const TaskFooter = () => {
  const taskList = useAppSelector((state) => state.Tasks.taskList);
  const dispatch = useAppDispatch();

  const handleClearAll = () => {
    dispatch(resetTask());
  };

  return (
    <footer className='task-footer flex flex--align background'>
      <p>{taskList?.length} items left</p>
      <Button type='button' addClass='btn' btnAction={handleClearAll}>
        Clear All
      </Button>
    </footer>
  );
};

export default TaskFooter;
