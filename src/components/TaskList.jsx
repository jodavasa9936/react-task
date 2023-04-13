import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Tasklist() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }
  /*si useState([]) entonces aparecera en pantalla este if
y es igual a 0 debido a que el array esta vacio*/  

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {/*  gap significa espacio entre los recuadros que es de 2 
     este caso*/}
      {/* padding-4 */}
      {/* rounded-md son los bordes */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Tasklist;
