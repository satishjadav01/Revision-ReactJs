import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

const [data, setdata] = useState("")
const [loading, setloading] = useState(true)
   
useEffect(()=>{

const fetchUsers =async () => {
  try {
    const res = await axios.get('https://dummyjson.com/users')
    console.log(res)
  } catch (error) {
    console.log(error);
  }finally{
    setloading(false)
  }
}
  fetchUsers()
  if(loading) 
    return 
  <p>Loading...</p>
},[])

  return (
    <div>
      <h1> </h1>
    </div>
  )
}

export default App