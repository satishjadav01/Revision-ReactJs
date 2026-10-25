import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

const [data, setdata] = useState([])

useEffect(()=>{
  function fetchUserdata() {
    try {
      let res = axios.get('https://dummyjson.com/users')
      console.log(res);
      setdata(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  fetchUserdata()
},[])

  return (
    <div>
      
    </div>
  )
}

export default App