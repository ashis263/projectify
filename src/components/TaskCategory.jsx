import DropdownIcon from "./svgIcons/DropdownIcon";
import Task from "./Task";
import useTasks from "../hooks/useTasks";

const TaskCategory = ({ label }) => {
  const {tasks} = useTasks();
  const filteredTasks = tasks.filter(task => task.category === label)
  const bgColor =
    (label === "Todo" && "bg-indigo-500") ||
    (label === "In Progress" && "bg-yellow-500") ||
    (label === "Done" && "bg-teal-500") ||
    "bg-rose-500";
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg ${bgColor} p-4`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{label} ({filteredTasks.length})</h3>
          <DropdownIcon />
        </div>
        <div>
          {
            filteredTasks.map(task => <Task key={task.id} task={task} />)
          }
        </div>
      </div>
    </div>
  );
};

export default TaskCategory;

