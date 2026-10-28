import React, { useState } from "react";

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
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-cyan-100">
      <form action="" onSubmit={handleSubmit}>
        <div className="h-100 w-90 flex flex-col justify-center bg-cyan-200 m-1 p-1 shadow ">
          <h1 className="font-bold text-4xl text-center ">Login Page</h1>
          <label htmlFor="" className="text-2xl font-semibold">
            username
          </label>
          <input
            type="text"
            placeholder="enter username"
            className="text-xl border rounded m-1 p-1 "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="" className="text-2xl font-semibold">
            password
          </label>
          <input
            type="password"
            placeholder="enter password"
            className="text-xl border rounded m-1 p-1 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="h-9 rounded cursor-pointer hover:scale-95 mt-3 bg-cyan-500">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormHandle;
