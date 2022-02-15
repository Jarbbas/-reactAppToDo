import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [showForm, setShowForm] = useState(false) //showForm - serve mostrar o formualário de preenchimento
  const [tasks, setTasks] = useState([])

  useEffect(() => { // useEffect e chamada quando a página é inicializada
    const getTaks = async () => { // chama uma função assicrona getTasks
      const tasksFromFile = await fetchTasks() // que fica à espera da resposta fetchTasks
      setTasks(tasksFromFile)
    }

    getTaks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //Fetch Task
  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //Add Task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks/', {
      method:'POST',
      headers: {'content-type': 'application/json', },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    setTasks([...tasks,data])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Important
  const toggleImportant = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, important: !taskToToggle.important}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {'content-type': 'application/json', },
      body: JSON.stringify(updatedTask),
    })
    // const data = await res.json()
    setTasks(tasks.map((task) =>
    task.id === id ? { ...task,important: !task.important } : task
      )
    )
  }

  return (
    <Router>
      <div className="container">
        <Header 
          title={"Tarefas"}
          onAdd={() => setShowForm(!showForm)}
          showAdd={showForm} 
        />
        <Routes>
          <Route path='/' element={
            <>
              {showForm && <AddTask onAdd={addTask}/>}
              { tasks.length > 0 ? 
                (<Tasks tasks={tasks} 
                  onDelete={deleteTask} 
                  onToggle={toggleImportant}/>) : ('Parabéns, não há tarefas pendentes.') }
            </>
          }
          />
          <Route path ='/about' element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
