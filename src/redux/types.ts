export interface Task {
  id: number;
  text: string;
}

// Define action types
export interface AddTaskAction {
  type: "ADD_TASK";
  payload: Task;
}

// Define the state shape for tasks
export interface TaskState {
  tasks: Task[];
}

// Define a union type for all action types related to tasks
export type TaskActionTypes = AddTaskAction;
