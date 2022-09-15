import { useState } from "react";
import style from "./style.module.css";
const DEFAULT_TASK = {
  title: "",
  priority: 0,
}
export const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState(DEFAULT_TASK);

  const getInputTitle = (e) => {
    setTask((prevSate) => {
      return {
        ...prevSate,
        title: e.target.value,
      };
    });
  };

  const getInputPriority = (e) => {
    setTask((prevSate) => {
      return {
        ...prevSate,
        priority: parseInt(e.target.value),
      };
    });
  };

  const taskInfo = (e) => {
    e.preventDefault();
    addTask(task);
    setTask(DEFAULT_TASK)
  };

  return (
    <form action="#" className={style.form} onSubmit={taskInfo}>
      <div className={style.circle__container}>
        <span className={style.circle}></span>
        <input
          className={style.title__input}
          type="text"
          placeholder="Insert Task Title..."
          id="title"
          onChange={getInputTitle}
          value={task.title}
        />
      </div>
    </form>
  );
};
