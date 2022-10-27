import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  if (tasks.length == 0) {
    return <h3>No hay tareas</h3>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
