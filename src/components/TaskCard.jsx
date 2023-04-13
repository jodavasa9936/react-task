import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white">
      {/*       al almacenar los elementos en una etiqeta TaskContext
      se agrega en cada reproduccion del array components context */}

      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      {/*  xl habla de talla xtra large */}
      {/* font-bold es un tipo de letra */}
      {/* capitalize hace que la primera este en mayuscula */}
      <p className="text-gray-500 text-sm">{task.description}</p>
      {/* text-sm significa small */}
      {/* text-gray-500 tendra un color mas tenue */}
      <button
        className="bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
      {/* bg-red-500 es un color */}
      {/* p es padding en X y Y */}
    </div>
  );
}

export default TaskCard;
