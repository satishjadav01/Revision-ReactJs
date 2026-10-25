import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);

  const handleSubmit = (e) => {
    e.prevetDefault();

    const userData = {
      username: username,
      password: password,
    };
    data([...setdata, userData]);

    setusername("");
    setpassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-amber-100">
      <form action="">
        <div className="flex flex-col justify-center shadow-2xl h-100 w-120 m-2 p-5 gap-2">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <label htmlFor="" className="text-xl">
            Username
          </label>
          <input
            type="text"
            placeholder="enter username"
            className="text-xl border-2 rounded m-1 p-1"
          />

          <label htmlFor="" className="text-xl">
            Password
          </label>
          <input
            type="password"
            placeholder="enter password"
            className="text-xl border-2 rounded m-1 p-1"
          />

          <button className="h-9 mt-6 border m-1 p-1 text-xl rounded cursor-pointer bg-amber-200 border-none hover:bg-amber-300 hover:scale-95">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
