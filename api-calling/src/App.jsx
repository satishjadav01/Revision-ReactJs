import React, { useEffect, useState } from 'react'
import axois from 'axios'
import axios from 'axios'

const App = () => {

  const [user, setuser] = useState([])

  useEffect(()=>{

    function fetchUserdata(){
      try {
        let res = axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res);
        setuser(res.data)

      } catch (error) {
        console.log('error',error);
      }
    }
    fetchUserdata();
  },[])

  return (
    <div>
      
    </div>
  )
}

export default App