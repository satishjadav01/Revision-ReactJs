import React, { useState } from 'react'

const App = () => {

const [search, setsearch] = useState("")

const users = ["abc","satihs","jadav","asdsadf"]

const handleSearch =(e)=>{
  setsearch(e.target.value)
}

const searchFilter = users.filter((user)=>{
  return user.toLowerCase().includes(search.toUpperCase())
})

  return (
    <div>
      <input type="text"
      placeholder='search hare...'
      value={search}
      onChange={handleSearch}
       />
       {searchFilter.map((user)=>{
        return <p key={user}>{user}</p>
       })}
    </div>
  )
}

export default App