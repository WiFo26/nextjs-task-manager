// import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../../models/task.class";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";

export const TaskComponent = ({ task, toggleCompleteById, deleteTaskById }) => {
  const toggleComplete = () => {
    toggleCompleteById(task.id);
  };

  return (
    <li className={style.task__item}>
      <div className={style.checkbox__wrapper}>
        <input
          checked={task.completed}
          id={task.id}
          className={style.check__icon}
          type="checkbox"
          onChange={toggleComplete}
        />
      </div>
      <label
        htmlFor={task.id}
        className={`${style.task__label} ${task.completed && style.marked}`}
      >
        <div className={style.task_title__container}>{task.name}</div>
        {/* <div>
          <Priority priority={task.level} />
        </div> */}
      </label>
      <div
        className={style.delete__icon}
        onClick={() => {
          deleteTaskById(task.id);
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </li>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};
