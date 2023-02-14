import TasksList from "./components/TaskCard/TasksList/TasksList";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>ToDo App 📝</h1>
      </header>
      <main>
        <TasksList />
      </main>
    </div>
  );
};

export default App;
