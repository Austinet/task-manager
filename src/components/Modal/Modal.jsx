import {useEffect} from 'react'
import PropTypes from 'prop-types'
import checkmark from './checkmark.png'
import './modal.css'

const Modal = ({message, dispatch}) => {
  useEffect(() => {
    setTimeout(() => dispatch({type: "REMOVE_MODAL"}), 3000)
  }, [dispatch])

  return (
    <div className='modal'>
      <div className='message'>
         <p>{message}</p>
         <img src={checkmark} alt="Green Checkmark" />
      </div>
      <div className='line'>
        <p></p>
      </div>
    </div>
  )
}
 
Modal.propTypes = {
  message: PropTypes.string, 
  dispatch: PropTypes.func
}

export default Modal