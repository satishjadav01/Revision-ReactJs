import React, { useState } from "react";

const ShowHidePassword = () => {
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        className="border rounded m-1 p-1"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <button
        onClick={() => setshowPassword((prev) => !prev)}
        className="h-10 rounded w-25 text-center m-1 p-1 bg-amber-300"
      >
        {showPassword ? "hide" : "show"}
      </button>
    </div>
  );
};

export default ShowHidePassword;
