import { useContext } from "react";
import { TaskContext } from "../contexts/context";

const useTasks = () => {
  const context = useContext(TaskContext);
  return context;
};

export default useTasks;
