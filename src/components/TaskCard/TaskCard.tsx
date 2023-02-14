import { TaskStructure } from "../../types";
import "./TaskCard.css";

interface TaskCardProps {
  task: TaskStructure;
}

const TaskCard = ({
  task: { id, isDone, name },
}: TaskCardProps): JSX.Element => {
  return (
    <article className="task-card">
      <button className="task-card__toggle-button">✅</button>
      <h2 className={`task-card__name ${isDone ? "name--line-through" : ""}`}>
        {name}
      </h2>
      <button>🗑</button>
    </article>
  );
};

export default TaskCard;
