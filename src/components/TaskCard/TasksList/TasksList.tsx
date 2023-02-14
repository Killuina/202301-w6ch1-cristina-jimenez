import tasks from "../../../data/tasks";
import TaskCard from "../TaskCard";

const TasksList = (): JSX.Element => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
