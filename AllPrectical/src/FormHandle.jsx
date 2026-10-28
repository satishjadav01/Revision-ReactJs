import React from "react";
import { useState } from "react";

const FormHandle = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };
    setdata([...data, userData]);
    console.log(userData);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <form action="" onSubmit={handleSubmit}>
        <div className="h-100 w-120 flex flex-col justify-center items-center">
          <label htmlFor="" className="text-xl font-bold">
            USername
          </label>
          <input
            type="text"
            placeholder="Enter Username "
            className="border-1 rounded text-xl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="" className="text-xl font-bold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password "
            className="border-1 rounded text-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default FormHandle;
