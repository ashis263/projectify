import { useReducer } from "react";
import { TaskContext } from "../contexts/context";
import taskReducer from "../reducers/taskReducer";

const TaskProvider = ({ children }) => {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, tasksDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
