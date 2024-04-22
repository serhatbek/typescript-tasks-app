export type Task = {
  id: string;
  text: string;
  isChecked: boolean;
};

export type TaskState = {
  taskList: Task[];
};
