import React, { useState } from "react";
import { LEVEL } from "../../../models/LEVEL.enum";
import { Task } from "../../../models/task.class";
import { TaskForm } from "../../pure/Forms/Task";
import { List } from "../List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import style from "./style.module.css";

const DEFAULT_TASK_1 = new Task(
  0,
  "Jog around the park 3x",
  false,
  LEVEL.NORMAL
);
const DEFAULT_TASK_2 = new Task(
  1,
  "10 minutes meditation",
  false,
  LEVEL.MEDIUM
);
const DEFAULT_TASK_3 = new Task(
  2,
  "Read for 1 hour",
  false,
  LEVEL.HIGH
);
const DEFAULT_TASK_4 = new Task(
  3,
  "Pick up groceries",
  false,
  LEVEL.CRITICAL
);

export const Main = () => {
  const [tasks, setTasks] = useState([
    DEFAULT_TASK_1,
    DEFAULT_TASK_2,
    DEFAULT_TASK_3,
    DEFAULT_TASK_4,
  ]);

  const toggleCompleteStateById = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    // const updatedTasks = [...tasks];
    // updatedTasks[id].completed = !updatedTasks[id].completed;
    setTasks(updatedTasks);
  };

  const addTask = ({ title, description, priority }) => {
    const newId = tasks.length;
    const newTask = new Task(newId, title, description, false, priority);
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  };

  const deleteTaskById = (id) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  };

  return (
    <main className={style.main}>
      <section className={style.title__container}>
        <span className={style.title}>TODO</span>
        <div className={style.theme__container}>
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </section>
      <TaskForm addTask={addTask}/>
      <section className={style.list__container}>
        {tasks.length > 0 ? (
          <List
            tasks={tasks}
            toggleCompleteById={toggleCompleteStateById}
            deleteTaskById={deleteTaskById}
          />
        ) : (
          <h2 className={style.empty_data}>You have no tasks yet</h2>
        )}
        <div className={style.filter__section}>Actions To Filter List</div>
      </section>
    </main>
  );
};
