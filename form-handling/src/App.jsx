import React, { useState } from 'react'

const App = () => {

const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [data, setdata] = useState([])

const handleSubmit =(e)=>{
  e.prevetDefault()

  
}

  return (
    <div>App</div>
  )
}

export default App