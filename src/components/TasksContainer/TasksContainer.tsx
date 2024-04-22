import './TasksContainer.scss';
import AddTask from '../AddTask/AddTask';
import { useAppSelector } from '../../hooks/hooks';
import { Task } from '../../components/index';

const TasksContainer = () => {
  const taskList = useAppSelector((state) => state.Tasks.taskList);

  return (
    <div className='todo-container container flex flex--col flex--align flex--justify'>
      <h2>Tasks List</h2>
      <AddTask />
      <div className='box background'>
        {taskList?.map((task) => (
          <Task key={task.id} taskItem={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksContainer;
