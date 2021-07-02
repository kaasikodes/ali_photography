import { FaTimes } from "react-icons/fa";

const Task = ({task, deleteTask,toggleReminder}) => {
    return (
        <div className = { task.reminder ? 'showReminder' : ''} style = {TaskStyles} onDoubleClick = {()=>{ 
                toggleReminder(task.id)
                
            }}>
            <div>
                <h3 style = {{marginBottom: '20px'}}>{task.title}</h3>
                <p>{task.day}</p>
            </div>

            <div>
                <FaTimes style = { {color: 'red', cursor: 'pointer'}} onClick = {()=> deleteTask(task.id)}/>
            </div>
        </div>
    )
}

const TaskStyles = {
    backgroundColor: '#f4f5f5',
    padding: '10px 20px',
    margin: '10px 0',
    color: '#1b1b1b',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'
}

export default Task

