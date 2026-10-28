import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
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
    <div className="h-screen w-full flex justify-center items-center bg-amber-50">
      <form action="" onSubmit={handleSubmit}>
        <div className="h-100 w-120 flex flex-col justify-center items-center bg-amber-100 shadow rounded">
          <h1 className="text-3xl font-bold">Login</h1>
          <label htmlFor="" className="text-xl font-bold m-1 p-1 mr-35">
            Username
          </label>
          <input
            type="text"
            className="border m-1 p-1 text-xl rounded "
            placeholder="Enter Username "
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label htmlFor="" className="text-xl font-bold m-1 p-1 mr-35">
            Password
          </label>
          <input
            type="password"
            className="border m-1 p-1 text-xl rounded "
            placeholder="Enter passowrd "
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="h-9 w-56 bg-amber-500 rounded hover:bg-amber-600 text-white mt-6">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
