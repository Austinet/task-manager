import { useState, useReducer } from 'react'
import ShowTasks from '../ShowTasks/ShowTasks'
import AddTask from '../AddTask/AddTask'
import Modal from '../Modal/Modal'
import reducer from '../../utils/data.js'
import './App.css'
   

const defaultValues = {
  taskDB: [],
  isModalSet: false,
  modalMessage: ''
}

function App() {
  const [showForm, setShowForm] = useState(true)
  const [state, dispatch] = useReducer(reducer, defaultValues)

  return (
    <>
       <main>
        <div className="modal-container">
           {state.isModalSet && <Modal message={state.modalMessage} dispatch={dispatch}/>}
        </div>
        <section id="task-manager">
           <div className="container">
               <div className="header">
                   <h1>Task Manager</h1>
                   <button className={showForm ? "red-bg" : "dark-bg"} onClick={()=> setShowForm(!showForm)}>{showForm ? "Close": "Add"}</button>
               </div>
               {showForm && <AddTask dispatch={dispatch}/>}
               <ShowTasks tasks={state.taskDB} dispatch={dispatch}/>
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