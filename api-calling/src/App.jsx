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
    <div>
        <ul>
          
        </ul>
    </div>
  )
}

export default App