import Task from "./Task";

const Tasks = ({tasks,onDelete,toggleReminder}) => {
    
    return (
        <div>
        
           {tasks.map((task)=>{

               return <Task key = {task.id} task = {task} deleteTask = {onDelete} toggleReminder = {toggleReminder}/>

           })}
            
        </div>
    )
}



export default Tasks
