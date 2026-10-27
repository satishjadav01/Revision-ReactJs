import React, { use, useState } from 'react'

const App = () => {

const [search, setsearch] = useState("")

const users = ["satihs", "sanjay" , "sureshbhai" , "shantuben"]

const filteredUsers = users.filter((user)=>{
  user.toUpperCase().includes(search.toLowerCase())
});

  return (
    <div>
      <input type="text"
      value={search} 
      onChange={(e)=>setsearch(e.target.value)}
      placeholder='serach hare '/>

      {filteredUsers.map((user)=>{
        <p key={user}>{user}</p>
      })}
    </div>
  )
}

export default App