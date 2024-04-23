export type TaskProps = {
  id: string;
  text: string;
  isChecked: boolean;
};

export type TaskState = {
  taskList: TaskProps[];
};
