import React, { useState } from 'react'

const App = () => {

const [serch, setserch] = useState("")

const users = ["satish", "sanjay" , "papa" , "mummy"]

const hanleSearch =(e)=>{
  setserch(e.target.value)
}

const filterUsers = users.filter((user)=>{
  return user.toLowerCase().includes(serch.toLowerCase())
});  

const displayUsers = () =>{
  return filterUsers.map((user)=>{
    return <p key={user}>{user}</p>
  }); 
};  

  return (
    <div>
      <input type="text"
      value={serch}
      onChange={hanleSearch}
      placeholder='search user' />

      {displayUsers()}
    </div>
  )
}

export default App