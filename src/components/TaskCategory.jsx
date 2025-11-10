import DropdownIcon from "./svgIcons/DropdownIcon";
import Task from "./Task";

const TaskCategory = ({ label }) => {
  const bgColor =
    (label === "Todo" && "bg-indigo-500") ||
    (label === "In Progress" && "bg-yellow-500") ||
    (label === "Done" && "bg-teal-500") ||
    "bg-rose-500";
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg ${bgColor} p-4`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{label} (45)</h3>
          <DropdownIcon />
        </div>
        <div>
          <Task />
        </div>
      </div>
    </div>
  );
};

export default TaskCategory;
