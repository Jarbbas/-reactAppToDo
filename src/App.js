import { useState } from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

  const [showForm, setShowForm] = useState(false) //showForm - serve mostrar o formualário de preenchimento
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Terminar Tarefa',
      date: '2022-02-01',
      important: false,
    },
    {
      id:2,
      text: 'Estudar React',
      date: '2022-02-02',
      important: true,
    },
  ])

  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1  // vai gerar um ID random para as Tarefas
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]) // vai adicionar ao tasks, a newtask através do spread operator

  }

  //Delete Task
  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Important
  const toggleImportant = (id) => {
      setTasks(tasks.map((task) =>
      task.id === id ? { ...task,important: !task.important } : task
      )
    )
  }

  return (
    <div className="container">
      <Header 
        title={"Tarefas"}
        onAdd={() => setShowForm(!showForm)}
        showAdd={showForm} 
      />
      {/* Ternario "curto &&" para mostrar ou não o formulário */}
      {showForm && <AddTask onAdd={addTask}/>}
        { tasks.length > 0 ? 
          (<Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleImportant}/>) : ('Parabéns, não há tarefas pendentes.') }
    </div>
  );
}

export default App;
