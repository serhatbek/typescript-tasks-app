import './TasksContainer.scss';
import AddTask from '../AddTask/AddTask';

const TasksContainer = () => {
  return (
    <div className='todo-container container flex flex--col flex--align flex--justify'>
      <h2>Tasks List</h2>
      <AddTask />
      <div className='box background'></div>
    </div>
  );
};

export default TasksContainer;
