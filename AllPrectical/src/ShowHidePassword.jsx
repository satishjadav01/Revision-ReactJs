import React, { useState } from 'react'

const ShowHidePassword = () => {

    const [password, setpassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)  
    
    
  return (
    <div>
        <input type="text"
        placeholder='Enter password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)} />

        <button onClick={()=>setpassword((prev)=>!prev)}>
            {showPassword ? "hide" : "show"}
        </button>
    </div>
  )
}

export default ShowHidePassword