import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

const [user, setuser] = useState([])

useEffect(()=>{
  const fetchUserData =async()=>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setuser(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(`${error} "faild to fetch`);
      
    }
  }
  fetchUserData()
},[])
    
  return (
    <div>
      {user.map((u)=>{
        return (
          <div key={u.id}>
             <p>{u.id}</p>
             <p>{u.username}</p>
             <p>{u.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App