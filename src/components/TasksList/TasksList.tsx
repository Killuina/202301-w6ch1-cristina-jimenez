import { Tasks } from "../../types";
import TaskCard from "../TaskCard/TaskCard";
import "./TasksList.css";

interface TasksListProps {
  tasks: Tasks;
}

const TasksList = ({ tasks }: TasksListProps): JSX.Element => {
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
