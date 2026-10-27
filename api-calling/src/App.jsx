import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username:username,
      password:password
    }
    setdata([...data , userData])
    console.log(setdata);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-amber-100">
      <form action="" onSubmit={handleSubmit}>
        <div className="h-100 w-120 justify-center items-center flex flex-col bg-amber-200 shadow-2xl rounded-2xl">
          <label htmlFor="" className="text-xl mr-37">
            Username
          </label>
          <input
            type="text"
            className="text-xl border-2 rounded m-1 p-1"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
          />
          <label htmlFor="" className="text-xl mr-37">
            Password
          </label>
          <input
            type="password"
            className="text-xl border-2 rounded m-1 p-1"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <button className="h-10 border-2 w-60 rounded-2xl hover:scale-95 mt-7 cursor-pointer bg-amber-600 hover:bg-amber-700 text-white">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
