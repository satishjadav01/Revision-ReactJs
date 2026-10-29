import React, { useState } from 'react'

const Todo = () => {
  const [task, settask] = useState("")
  const [tasks, settasks] = useState("")

const handleAdd=()=>{
  settasks([...tasks,task])
  settask("")
}

const handleDelete=(index)=>{
  settasks(task.filter((_,i)=> i !== index));
}
  
  return (
    <div>
      <input type="text"
      value={task}
      onChange={(e)=>settask(e.target.value)} 
      placeholder='enter task'/>
      <button>Add Task</button>
    </div>
  )
}

export default Todo