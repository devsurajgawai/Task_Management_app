import React, { useState } from "react";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter task"
        className="flex-grow p-4 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="ml-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
