import React, { useState } from 'react'

const ShowHidePassword = () => {

const [password, setPassword] = useState("")
const [showPassword, setshowPassword] = useState(false)

  return (
    <div>
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter password'
         />
        <button onClick={()=>setPassword((prev)=>!prev)}>
            {setPassword ? "hide" : "show"}
        </button>
    </div>
  )
}

export default ShowHidePassword