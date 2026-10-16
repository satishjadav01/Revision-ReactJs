import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setuser] = useState([]);

    useEffect (()=>{
     async function fetchUser() {
        try {
          const res = axios.get('https://jsonplaceholder.typicode.com/users')
          console.log(res);
          setuser(res.data);
        }catch(error){
          console.log('Error',error.message);
        }
      }
      fetchUser();
    },[])

  return (
    <div>

    </div>
  )
}

export default App