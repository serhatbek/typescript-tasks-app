import './TasksContainer.scss';
import { AddTask, TaskItem } from '../../components/index';
import { useAppSelector } from '../../hooks/hooks';
// import TaskItem from './../TaskItem/TaskItem';

const TasksContainer = () => {
  const taskList = useAppSelector((state) => state.Tasks.taskList);

  return (
    <div className='todo-container container flex flex--col flex--align flex--justify'>
      <h2>Tasks List</h2>
      <AddTask />
      <div className='box background'>
        {taskList?.map((task) => (
          <TaskItem key={task.id} item={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksContainer;
