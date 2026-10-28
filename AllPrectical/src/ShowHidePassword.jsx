import React, { useState } from 'react'

const ShowHidePassword = () => {

const [password, setPassword] = useState("")
const [showPassword, setshowPassword] = useState(false)


  return (
    <div>
    <input type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e)=>setPassword(e.target.value)} 
    placeholder='enter password'/>
    <button onClick={()=>setshowPassword((prev)=>!prev)}>
        {showPassword ? "show" : "hide"}
    </button>
    </div>
  )
}

export default ShowHidePassword