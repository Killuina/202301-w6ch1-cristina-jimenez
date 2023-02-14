import tasks from "../../data/tasks";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

const TasksList = (): JSX.Element => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
