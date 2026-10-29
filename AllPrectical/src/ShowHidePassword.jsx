import React, { useState } from "react";

const ShowHidePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div>
      <input 
        type={showPassword ? "text" : "password"}
        className="border p-1 m-1 font-bold "
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={()=>setshowPassword((prev)=>!prev)}
        className="h-9 w-20 bg-black rounded text-white  ">
        {showPassword ? "Show" : "Hide"}
      </button>
    </div>
  );
};

export default ShowHidePassword;
