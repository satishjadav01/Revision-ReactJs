import React, { useState } from 'react'

const App = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setdata] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()

        const user = {
            username : username,
            password : password,
        };
        console.log(user);
        setdata([...data , user])
        
    }

  return (
    <div>App</div>
  )
}

export default App