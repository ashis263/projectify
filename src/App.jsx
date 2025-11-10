import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <TaskContainer />
      </main>
    </div>
  );
};

export default App;
