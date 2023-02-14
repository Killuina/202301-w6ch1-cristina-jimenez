import TaskCard from "./components/TaskCard/TaskCard";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>ToDo App 📝</h1>
      </header>
      <main>
        <TaskCard task={{ id: 1, name: "Hacer la colada", isDone: false }} />
      </main>
    </div>
  );
};

export default App;
