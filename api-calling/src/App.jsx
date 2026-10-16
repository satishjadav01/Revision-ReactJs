import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setuser] = useState([])

  useEffect(()=>{
    async function fetchUSer(){
      
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res);
        setuser(res.data)        
      } catch (error) {
        console.log('error',error);
      }
    }
    fetchUSer();
  },[])

  return (
    <div className='bg-gray-50 h-screen w-full'>
      <h1 className='text-3xl font-bold text-center'>Users</h1>

    <div className='grid grid-cols-1 gap-5 p-1 m-1 sm:grid-cols-2 md:grid-cols-3'>
      {user.map((u)=>{
          return (
            <div key={u.id} className='rounded-lg bg-white p-4 shadow'>
                <h2 className='font-bold'>{u.name}</h2>
                <p>{u.id}</p>
                <p>@{u.username}</p>
            </div>
          )
      })}
    </div>

    </div>
  )
}

export default App