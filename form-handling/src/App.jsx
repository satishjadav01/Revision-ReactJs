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
    setusername("");
    setpassword("");
    console.log(userData);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-amber-50">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center shadow-2xl h-100 w-120 m-5 p-1 bg-amber-100">
          <h1 className="font-bold text-3xl text-center"> Login</h1>
          <label htmlFor="" className="text-xl p-1 m-1">
            Username
          </label>
          <input
            type="text"
            placeholder="enter username"
            className="text-xl border-2 p-1 m-2 rounded"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />  
          <label htmlFor="" className="text-xl p-1 m-1">
            Password
          </label>
          <input
            type="password"
            placeholder="enter password"
            className="text-xl border-2 p-1 m-2 rounded"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="h-10   bg-amber-300 m-1 p-1 rounded cursor-pointer hover:bg-amber-400 hover:scale-95 mt-5">
            submit
          </button>
        </div>
        {data.map((u, index) => {
          return (
            <>
              <div key={index}>
                <p className="">{u.username}</p>
                <p className="">{u.password}</p>
              </div>
            </>
          );
        })}
      </form>
    </div>
  );
};

export default App;
