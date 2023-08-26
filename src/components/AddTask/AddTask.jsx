import { useState } from 'react'
import PropTypes from 'prop-types'
import './addTask.css'

const AddTask = ({saveTask}) => {
    const resetTask = {
        name: "",
        dateTime: "",
        reminder: false
    }
    const [task, setTask] = useState(resetTask)

    //Add task
    const addTask = (e) => {
        e.preventDefault()
        if (!task.name.trim()) {
            alert("Enter task name")
        } else if (!task.dateTime.trim()) {
            alert("Enter date and time")
        } else {
            saveTask(task)
            setTask(resetTask)
        }     
    }

    return (
        <form onSubmit={addTask}>
        <div className="form-control">
           <label htmlFor="task">Task Name</label>
           <input 
              type="text" 
              id="name"
              className='input-box'
              placeholder="Add Task"
              value={task.name} 
              onChange={(e)=> setTask({...task, name: e.target.value})}
              required
            />
        </div>
        <div className="form-control">
           <label htmlFor="day-time">Due Day & Time</label>
           <input 
             type="datetime-local"  
             id="dateTime" 
             className='input-box'
             placeholder="Add Day & Time" 
             value={task.dateTime}
             onChange={(e)=> setTask({...task, dateTime: e.target.value})} 
             required 
            />
       </div>
       <div className="form-control-checkbox">
           <label htmlFor="reminder">Set Reminder</label>
           <input 
             type="checkbox" 
             id="reminder" 
             checked={task.reminder} 
             onChange={(e)=> setTask({...task, reminder: e.currentTarget.checked})}
            />
       </div>
       <button type="submit">Save Task</button>
    </form>
    )
  }
  
  AddTask.propTypes = {
    saveTask: PropTypes.func
  }
  export default AddTask