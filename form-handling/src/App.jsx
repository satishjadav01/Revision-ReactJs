import React, { useState } from 'react'

const App = () => {
    const [username, setUsername] = useState("")
    const [pass, setpass] = useState("")
    const [data, setdata] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = {
            username : username,
            pass:pass
        }
        setdata([...data , data])
        console.log(data);
        setUsername("")
        setpass("")
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Username </label>
            <input type="text" placeholder='Enter The Username. cla' />
        </form>
    </div>
  )
}

export default App