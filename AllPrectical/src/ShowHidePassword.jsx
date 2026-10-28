import React, { useState } from 'react'

const ShowHidePassword = () => {

    const [password, setPassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)
  return (
    <div>
        <input type={showPassword ? "text" : "password"} />
    </div>
  )
}

export default ShowHidePassword