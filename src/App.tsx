import TasksList from "./components/TasksList/TasksList";
import tasks from "./data/tasks";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>ToDo App 📝</h1>
      </header>
      <main>
        <TasksList tasks={tasks} />
      </main>
    </div>
  );
};

export default App;
