import { createContext, useState, useEffect } from "react";
import { task } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    settasks(task);
  }, []);

  function createTask(task) {
    settasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    settasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
