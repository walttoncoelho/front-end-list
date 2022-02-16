import FormTask from "./components/tasks/FormTask"
import ListTask from "./components/tasks/ListTask"
import Task from "./components/tasks/tasks"


function App() {

  return (
    <>
      <header >
        <p>Todo List de Waltton</p>
      </header>
      <nav>
        <p>Menu topo</p>
      </nav>
      <main>       
       <Task />
      </main>
      <footer>
        <p>Rodapé</p>
      </footer>
    </>
  )
}

export default App
