import { useContext, useState } from 'react'
import { LEVEL } from '../../../models/LEVEL.enum'
import { Task } from '../../../models/task.class'
import { TaskForm } from '../../pure/Forms/Task'
import { List } from '../List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.css'
import { ThemeContext, themes } from '../../../store/theme-context'

const DEFAULT_TASK_1 = new Task(
  0,
  'Jog around the park 3x',
  false,
  LEVEL.NORMAL
)
const DEFAULT_TASK_2 = new Task(1, '10 minutes meditation', false, LEVEL.MEDIUM)
const DEFAULT_TASK_3 = new Task(2, 'Read for 1 hour', false, LEVEL.HIGH)
const DEFAULT_TASK_4 = new Task(3, 'Pick up groceries', false, LEVEL.CRITICAL)

export const Main = () => {
  const [tasks, setTasks] = useState([
    DEFAULT_TASK_1,
    DEFAULT_TASK_2,
    DEFAULT_TASK_3,
    DEFAULT_TASK_4,
  ])

  const [filterState, setFilterState] = useState({
    all: true,
    active: false,
    completed: false,
  })

  const { theme, toggleTheme } = useContext(ThemeContext)

  const toggleCompleteStateById = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const addTask = ({ title, description, priority }) => {
    const newId = tasks.length
    const newTask = new Task(newId, title, description, false, priority)
    setTasks((prevState) => {
      return [...prevState, newTask]
    })
  }

  const deleteTaskById = (id) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(newTasks)
  }

  const selectFilter = (e) => {
    console.log(e.target)
  }
  return (
    <main className={style.main}>
      <section className={style.title__container}>
        <span className={style.title}>TODO</span>
        <div className={style.theme__container}>
          {theme === themes.dark ? (
            <FontAwesomeIcon onClick={toggleTheme} icon={faSun} />
          ) : (
            <FontAwesomeIcon onClick={toggleTheme} icon={faMoon} />
          )}
        </div>
      </section>
      <TaskForm addTask={addTask} />
      <section className={style.list__container}>
        {tasks.length > 0 ? (
          <>
            <List
              tasks={tasks}
              toggleCompleteById={toggleCompleteStateById}
              deleteTaskById={deleteTaskById}
            />
            <div className={style.filter__section}>
              <span className={style.task_count}>
                {tasks.length} items left
              </span>
              <div className={style.filter_actions}>
                <span
                  className={`${
                    filterState.all
                      ? style.filter__active
                      : style.filter__deactivate
                  }`}
                  onClick={selectFilter}
                >
                  All
                </span>
                <span
                  className={`${
                    filterState.active
                      ? style.filter__active
                      : style.filter__deactivate
                  }`}
                  onClick={selectFilter}
                >
                  Active
                </span>
                <span
                  className={`${
                    filterState.completed
                      ? style.filter__active
                      : style.filter__deactivate
                  }`}
                  onClick={selectFilter}
                >
                  Completed
                </span>
              </div>
              <span className={style.clear_task}>Clear Completed</span>
            </div>
          </>
        ) : (
          <h2 className={style.empty_data}>You have no tasks yet</h2>
        )}
      </section>
    </main>
  )
}
