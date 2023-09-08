import PropTypes from 'prop-types'
import Task from './Task'

const ShowTasks = ({ tasks, dispatch}) => {
  return (
    <div className="task-container">
    {tasks.length ? (
      tasks.map((task) => (
        <Task key={task.id} task={task} dispatch={dispatch} />
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
    dispatch: PropTypes.func
}

export default ShowTasks