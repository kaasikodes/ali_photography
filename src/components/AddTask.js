import { useState } from 'react'

import React from 'react'

const AddTask = ({saveTask}) => {
    const [title,setTitle] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const saveAndReset = (e) => {
        e.preventDefault()
        if(!title){
            alert('Pls enter a title for task')
            return
        }
        let newTask = {
            title,
            reminder,
            day,
            id: Math.floor(Math.random() * 1000) + 1  // why add 1 find out
        }

        

        saveTask(newTask)
        
        setTitle('')
        setDay('')
        setReminder(false)
    }
    return (
        <div>
            <form onSubmit = {saveAndReset}>
                <input type = 'text' placeholder = 'title' value = {title} onChange = {(e)=>{
                    setTitle(e.target.value)
                }}></input>
                <input type = 'text' placeholder = 'day' value = {day} onChange = {(e)=>{
                    setDay(e.target.value)
                }}></input>
                <input type = 'checkbox' value = {reminder} checked = {reminder} onChange = {(e)=>{
                    setReminder(e.currentTarget.checked)
                }}></input><label>Set Reminder</label>
                <br/>
                <input type = 'submit' value = 'Save'></input>
                
            </form>
        </div>
    )
}

export default AddTask
