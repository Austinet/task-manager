import { useState } from 'react'
import ShowTasks from '../ShowTasks/ShowTasks'
import AddTask from '../AddTask/AddTask'
import './App.css'


function App() {
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(true)

  //Generate unique IDs
  const generateID = () => {
    let id =  Math.floor(Math.random() * 1000) + 1
    let checkDuplicateId = tasks.filter(task => task.id === id)

    if (checkDuplicateId[0]) {
      generateID()
    } else {
      return id
    }
  }

  //Save task
  const saveTask = (task) => {
    let newTask = {...task, id: generateID()}
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  //Toggle reminder
  const setReminder = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {...task, reminder: !task.reminder}
      } else {
        return task
      }
    }))
  }

  return (
    <>
       <main>
        <section id="task-manager">
           <div className="container">
               <div className="header">
                   <h1>Task Manager</h1>
                   <button className={showForm ? "red-bg" : "dark-bg"} onClick={()=> setShowForm(!showForm)}>{showForm ? "Close": "Add"}</button>
               </div>
               {showForm && <AddTask saveTask={saveTask}/>}
               <ShowTasks tasks={tasks} deleteTask={deleteTask} setReminder={setReminder}/>
               <footer>
                  <p>Copyright &copy; 2023 <a href="https://Austinet.github.io/portfolio/">Austinet</a></p>
               </footer>
           </div>
        </section>
        </main>
    </>
  )
}

export default App
