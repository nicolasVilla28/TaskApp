import { useState, useContext } from "react";
import {TaskContext} from "../context/TaskContext"

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)

  const submit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={submit} className="bg-slate-800 p-5 mb-4">
        <h1 className="text-lg font-bold text-white mb-3 text-center">AÑADIR TAREA</h1>
      <input
        placeholder="Añadir tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-2 w-full mb-2 rounded-sm"
        autoFocus
      />
      <textarea
        placeholder="Añadir descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-2 w-full mb-2 rounded-sm"
      />
      <button className="bg-sky-800 px-3 py-1 text-white rounded-md hover:bg-sky-500 w-full">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
