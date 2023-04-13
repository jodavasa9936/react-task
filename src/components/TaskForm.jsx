import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  /*esta recibiendo una propiedad y se llama createTask*/
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);
  /*   de todos los datos que hay en value, solo quiero 
  la funcion createTask */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    /*  aqui estamos actualizando la funcion createTask(title) */
    /* con newTask pasamos lo escrito en   el input a string */
    setTitle("");
    setDescription("");
    /* de esta manera se vuelve a tener en blanco  */
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          className= "bg-slate-300 p-3 w-full mb-2"
          /* w-full para que tome todo el maximo ancho */
          /* mb-2 para estar separados */
          value={title}
        />
        <textarea
          placeholder="Escribe la dscripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className= "bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>

        <button
        className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
