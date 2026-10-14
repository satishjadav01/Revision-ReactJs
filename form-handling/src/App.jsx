import React from 'react'
import { useState } from 'react'

const App = () => {
  
const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [email, setemail] = useState("")

const hanleSubmit = (e) => {
  e.preventDefault()
  setusername('')
  setpassword('')
  setemail('')
}

  return (
    <div>
        <h1>Resistration Form </h1>
        <form action="">
          <input type="text" onSubmit={hanleSubmit} />
        </form>
    </div>
  )
}

export default App