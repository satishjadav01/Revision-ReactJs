import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

const [data, setdata] = useState([])

useEffect(()=>{
  async function fetchUserdata() {
    try {
      let res = await axios.get('https://dummyjson.com/users')
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
      {data.map((u,index)=>{
        <div>
          
        </div>
      })}
    </div>
  )
}

export default App