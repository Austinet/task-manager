import PropTypes from 'prop-types'
import './showTasks.css'

const Task = ({task, dispatch}) => {
  const {id, name, dateTime} = task

  return (
    <div className={`task-item ${task.reminder ? "green-border": ""}`} onDoubleClick={()=> dispatch({type: "SET_REMINDER", payload:  id})} title='Double click to toggle reminder'>
      <div className="details">
        <h3>{name}</h3>
        <p>{`Date: ${dateTime.slice(0, 10)} Time:${dateTime.slice(11)}`}</p>
      </div>
      <button className="delete-btn" title='Delete task' onClick={()=> dispatch({type: "DELETE_TASK", payload:  id})}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  )
}

Task.propTypes = {
    task: PropTypes.object,
    dispatch: PropTypes.func
}

export default Task