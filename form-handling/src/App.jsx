import React, { useState } from 'react'

const App = () => {

const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [data, setdata] = useState([])

const handleSubmit = (e)=>{
  e.preventDefault()
}

const userData = {
  username : username,
  password : password
}

setdata([...data , userData])

setusername("")
setpassword("")

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Username</label>
        </div>
      </form>
    </div>
  )
}

export default App