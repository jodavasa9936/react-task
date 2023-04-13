import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; 


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  
  function createTask(task){
    /* queremos colocar el objeto task dentro del arreglo  */
    /* aqui estamos añadiendo mas tareas despues de la ultima posicion en tasks.js */
    setTasks([...tasks, {
      title: task.title,
      id:tasks.length,
      description:task.description
    }])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return ( 
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
    /* el TaskContent lo que hace es colocarle un nombre a este componente en si, 
pero el componente en si se llama provider  */
  );
}
