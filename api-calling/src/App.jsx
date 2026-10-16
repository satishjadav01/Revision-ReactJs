import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [User, setUser] = useState([]);

  useEffect(()=>{
    async function fetchUsers () {
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res);
        setUser(res.data)
      } catch (error) {
        console.log('error',error.message);
      }
    }
    fetchUsers()
  },[])
  return (
    <div className='flex h-screen w-full '>
        <ul>
          {User.map((u)=>{
            return (
              <>
                <li key={u.id}>{u.name}</li>
                <li key={u.id}>{u.id}</li>
                <li key={u.id}>{u.username}</li>

              </>
            )
            
          })}
        </ul>
    </div>
  )
}

export default App