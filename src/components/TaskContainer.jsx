import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import AddTaskModal from "./AddEditTaskModal";
import TaskCategory from "./TaskCategory";
import initialTask from "../data/initialTask";

const TaskContainer = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(initialTask);
  const [mode, setMode] = useState("Create");
  const taskCategories = [
    {
      id: 1,
      label: "Todo",
    },
    {
      id: 2,
      label: "In Progress",
    },
    {
      id: 3,
      label: "Done",
    },
    {
      id: 4,
      label: "Revise",
    },
  ];
  const handleModalClose = () => {
    setIsAddTaskModalOpen(false);
    setCurrentTask(initialTask);
    setMode("Create");
  };
  const onEdit = (task) => {
    setIsAddTaskModalOpen(true);
    setCurrentTask(task);
    setMode("Edit");
  };
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <AddTaskButton onAddClick={() => setIsAddTaskModalOpen(true)} />
        </div>
      </div>
      <div className="-mx-2 mb-6 flex flex-wrap">
        {taskCategories.map((category) => (
          <TaskCategory
            key={category.id}
            label={category.label}
            onEdit={onEdit}
          />
        ))}
      </div>
      {isAddTaskModalOpen && (
        <AddTaskModal
          onModalClose={handleModalClose}
          currentTask={currentTask}
          mode={mode}
        />
      )}
    </div>
  );
};

export default TaskContainer;
