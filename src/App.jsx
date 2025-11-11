import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskContainer from "./components/TaskContainer";
import TaskProvider from "./providers/TaskProvider";

const App = () => {
  return (
    <TaskProvider>
      <div className="flex h-screen relative">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <TaskContainer />
        </main>
      </div>
    </TaskProvider>
  );
};

export default App;
