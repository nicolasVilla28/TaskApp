import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskFrom";
import { task } from "./data/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    settasks(task);
  }, []);

  function createTask(task) {
    settasks([...tasks, {
        id: tasks.length,
        title: task.title,
        description: task.description
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
