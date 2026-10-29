import React, { useState } from "react";

const ShowHidePassword = () => {
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      {/* <button onClick={()=>{}}></button> */}

      <button onClick={() => setshowPassword((prev) => !prev)} className="">
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ShowHidePassword;
