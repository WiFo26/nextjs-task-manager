import { TaskComponent } from "../../pure/Task";
import style from "./style.module.css";

export const List = ({
  tasks,
  toggleCompleteById,
  deleteTaskById,
}) => {
  return (
    <ul className={style.tasks__list}>
      {tasks.map((task) => {
        return (
          <TaskComponent
            key={task.id}
            task={task}
            toggleCompleteById={toggleCompleteById}
            deleteTaskById={deleteTaskById}
          />
        );
      })}
    </ul>
  );
};
