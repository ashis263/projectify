import DeleteIcon from "./svgIcons/DeleteIcon";
import EditIcon from "./svgIcons/EditIcon";

const Task = ({ task, onEdit, onDelete }) => {
  const { id, taskName, description, dueDate } = task;
  const date = new Date(dueDate).toString();
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {taskName}
        </h4>

        <div className="flex gap-2">
          <DeleteIcon onDelete={() =>onDelete(id)} />
          <EditIcon onEdit={()=> onEdit(task)} />
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{description}</p>

      <p className="mt-6 text-xs text-zinc-400">{date}</p>
    </div>
  );
};

export default Task;
