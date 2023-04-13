import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      {/* bg-zinc cubre los colores blancos a 900 */}
      {/*      que baje todo el alto de la pantalla  */}
      <div className="container mx-auto p-10">
        {/* mx significa margin-x:auto */}
        <TaskForm />
        <TaskList />
        {/*aqui especificamos que nos muestre el arreglo de tareas*/}
      </div>
    </main>
  );
}

export default App;
