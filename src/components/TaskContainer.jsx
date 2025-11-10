import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import AddTaskModal from "./AddTaskModal";
import TaskCategory from "./TaskCategory";

const TaskContainer = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
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
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <AddTaskButton
            onAddClick={() => setIsAddTaskModalOpen(!isAddTaskModalOpen)}
          />
        </div>
      </div>
      <div className="-mx-2 mb-6 flex flex-wrap">
        {taskCategories.map((category) => (
          <TaskCategory key={category.id} label={category.label} />
        ))}
      </div>
      {isAddTaskModalOpen && <AddTaskModal onCancelClick={() => setIsAddTaskModalOpen(!isAddTaskModalOpen)} />}
    </div>
  );
};

export default TaskContainer;
