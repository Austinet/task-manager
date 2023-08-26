import PropTypes from 'prop-types'
import Task from './Task'

const ShowTasks = ({ tasks, deleteTask, setReminder}) => {
  return (
    <div className="task-container">
    {tasks.length ? (
      tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} setReminder={setReminder}/>
      ))
    ) : 
    (
      <p className='no-task'>No Task To Show</p>
    )
    }              
    </div>
  )
}

ShowTasks.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    deleteTask: PropTypes.func,
    setReminder: PropTypes.func
}

export default ShowTasks