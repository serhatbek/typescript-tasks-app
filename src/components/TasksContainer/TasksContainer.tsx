import './TasksContainer.scss';
import { AddTask, TaskFooter, TaskItem } from '../../components';
import { useAppSelector } from '../../hooks/hooks';

const TasksContainer = () => {
  const taskList = useAppSelector((state) => state.Tasks.taskList);

  return (
    <div className='todo-container container flex flex--col flex--align'>
      <h2>Tasks List</h2>
      <AddTask />
      <div className='box background'>
        {taskList?.map((task) => (
          <TaskItem key={task.id} item={task} />
        ))}
      </div>
      <TaskFooter />
    </div>
  );
};

export default TasksContainer;
