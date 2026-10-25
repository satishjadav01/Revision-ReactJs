import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

const [data, setdata] = useState([])

useEffect(()=>{
    function fetchUserdata() {
      const res = axios.get('https://dummyjson.com/users')
      console.log(res);
      
    }
},[])

  return (
    <div>App</div>
  )
}

export default App