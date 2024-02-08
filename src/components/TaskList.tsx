import React, { useState } from "react";
import {
  Droppable,
  Draggable,
  DragDropContext,
  DropResult,
} from "react-beautiful-dnd";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

interface TaskListProps {}

const TaskList: React.FC<TaskListProps> = () => {
  const [addedTasks, setAddedTasks] = useState<string[]>([]);
  const [startedTasks, setStartedTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleAddTask = (text: string) => {
    setAddedTasks([...addedTasks, text]);
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination || !result.destination) {
      return; // Dropped outside the droppable area
    }

    // Determine the source and destination lists based on droppableId
    let sourceList, destinationList, setSourceList, setDestinationList;
    switch (source.droppableId) {
      case "added":
        sourceList = addedTasks;
        setSourceList = setAddedTasks;
        break;
      case "started":
        sourceList = startedTasks;
        setSourceList = setStartedTasks;
        break;
      case "completed":
        sourceList = completedTasks;
        setSourceList = setCompletedTasks;
        break;
      default:
        return;
    }
    switch (destination.droppableId) {
      case "added":
        destinationList = addedTasks;
        setDestinationList = setAddedTasks;
        break;
      case "started":
        destinationList = startedTasks;
        setDestinationList = setStartedTasks;
        break;
      case "completed":
        destinationList = completedTasks;
        setDestinationList = setCompletedTasks;
        break;
      default:
        return;
    }

    // Check if the source and destination are the same
    if (source.droppableId === destination.droppableId) {
      // If the source and destination are the same, return early to prevent duplication
      return;
    }

    const updatedSourceList = Array.from(sourceList);
    const updatedDestinationList = Array.from(destinationList);

    const [removed] = updatedSourceList.splice(source.index, 1);
    updatedDestinationList.splice(destination.index, 0, removed);

    setSourceList(updatedSourceList);
    setDestinationList(updatedDestinationList);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <p className="text-5xl mb-10 text-gray-600 font-thin">
        Task Management App
      </p>
      <TaskForm onAddTask={handleAddTask} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex justify-around">
          <Droppable droppableId="added">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/3 bg-blue-100 p-4 rounded-lg mr-4"
              >
                <h2 className="text-lg font-semibold mb-4 text-blue-800">
                  Added
                </h2>
                {addedTasks.map((task, index) => (
                  <Draggable key={task} draggableId={task} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white rounded-md p-3 mb-2 shadow-md"
                      >
                        <TaskItem text={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="started">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/3 bg-green-100 p-4 rounded-lg mr-4"
              >
                <h2 className="text-lg font-semibold mb-4 text-green-800">
                  Started
                </h2>
                {startedTasks.map((task, index) => (
                  <Draggable key={task} draggableId={task} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white rounded-md p-3 mb-2 shadow-md"
                      >
                        <TaskItem text={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="completed">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/3 bg-yellow-100 p-4 rounded-lg"
              >
                <h2 className="text-lg font-semibold mb-4 text-yellow-800">
                  Completed
                </h2>
                {completedTasks.map((task, index) => (
                  <Draggable key={task} draggableId={task} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white rounded-md p-3 mb-2 shadow-md"
                      >
                        <TaskItem text={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
