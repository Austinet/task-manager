import PropTypes from 'prop-types'
import './showTasks.css'

const Task = ({task, deleteTask, setReminder}) => {
  const {id, name, dateTime} = task
  return (
    <div className={`task-item ${task.reminder ? "green-border": ""}`} onDoubleClick={()=> setReminder(id)}>
    <div className="details">
      <h3>{name}</h3>
      <p>{dateTime}</p>
    </div>
    <button className="delete-btn" onClick={()=> deleteTask(id)}>x</button>
  </div>
  )
}

Task.propTypes = {
    task: PropTypes.object,
    deleteTask: PropTypes.func,
    setReminder: PropTypes.func
}

export default Task