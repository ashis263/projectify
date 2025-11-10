import AddTaskModal from "./components/AddTaskModal";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <TaskContainer />
      </main>
      <AddTaskModal />
    </div>
  );
};

export default App;
