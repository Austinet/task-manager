const reducer = (state, action) => {
  try {
    if (action.type === "ADD_TASK") {
        return {
          ...state,
          taskDB: [...state.taskDB, action.payload],
          isModalSet: true,
          modalMessage: "Task Added"
        }    
      } else if (action.type === "DELETE_TASK") {
        return {
          ...state,
          taskDB: state.taskDB.filter(task => task.id != action.payload),
          isModalSet: true,
          modalMessage: "Task Deleted"
        } 
      } else if (action.type === "SET_REMINDER") {
        let taskDB = state.taskDB.map(task => {
            if (task.id === action.payload) {
              return {...task, reminder: !task.reminder}
            } else {
              return task
            }
          })
          return {
            ...state,
            taskDB,
            isModalSet: true,
            modalMessage: "Reminder Edited"
          }
      } else if (action.type === "REMOVE_MODAL") {
        return {
          ...state,
          isModalSet: false
        }
      } else {
          throw new Error("Invalid Action Type")
      }
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

export default reducer