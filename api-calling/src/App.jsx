import React, { useEffect, useState } from 'react';
import axois from 'axios';
import axios from 'axios'; 

const App = () => {

  const [user, setuser] = useState([]); 

  useEffect(()=>{ 

    async function fetchUserdata(){
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res);
        setuser(res.data);  
      } catch (error) {
        console.log('error',error); 
      } 
    }
    fetchUserdata(); 
  },[]);
 
  return (
    <div className='h-screen w-full bg-gray-50'>
      <h1 className='text-3xl font-bold text-center'>User Data</h1>
 
      <div className='grid grid-cols-1 gap-4 p-2 m-2 md:grid-cols-2 lg:grid-cols-3'>
        {user.map((u)=>{
          return(
            <div className='rounded-lg bg-white shadow'>
                <h2>{u.userId}</h2>
                <p>{u.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App;