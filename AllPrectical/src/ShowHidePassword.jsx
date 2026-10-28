import React, { useState } from "react";

const ShowHidePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setshowPassword((prev) => !prev)}>
        {setshowPassword ? "show" : "hide"}
      </button>
    </div>
  );
};

export default ShowHidePassword;
