export type Task = {
  id: number;
  name: string;
  isChecked: boolean;
};

export type TaskState = {
  taskList: Task[];
};
