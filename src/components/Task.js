import { FaTimes } from 'react-icons/fa'
import { FaExclamation } from 'react-icons/fa'


const Task = ({ task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.important ? 'important' : ''}`}>
          <h3>
          <FaExclamation 
              style={{color: `${task.important ? 'orange' : 'black'}`,
              cursor:'pointer'}}
              onClick={() => onToggle(task.id)}
            />
            {task.text}
              <FaTimes 
              style={{color:'red', 
              cursor:'pointer'}}
              onClick={() => onDelete(task.id)}
              />
          </h3>

          <p>{task.date}
          </p>
    </div>
  )
};

export default Task;
