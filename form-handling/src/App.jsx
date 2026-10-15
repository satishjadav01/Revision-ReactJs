import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };
    console.log(userData);
    setdata([...data, userData]);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gra-400">
      <form
        onSubmit={handleSubmit}
        action=""
        className="text-shadow flex justify-center items-center flex-col bg-cyan-100 shadow rounded-xl h-100 w-80"
      >
        <h1 className="text-xl font-bold flex justify-center items-center m-5  ">
          Registration
        </h1>
        <label htmlFor="" className="text-xl mr-32 m-1 p-1">
          Username{" "}
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          className="text-xl border-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="flex justify-center items-center flex-col">
          <label htmlFor="" className="text-xl mr-35 m-1 p-1">
            password{" "}
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="text-xl border-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-5 h-9 w-55 rounded-xl hover:bg-cyan-300 text-black cursor-pointer border hover:scale-95">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
