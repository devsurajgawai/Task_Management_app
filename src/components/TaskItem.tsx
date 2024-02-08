import React from "react";

interface TaskItemProps {
  text: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default TaskItem;
