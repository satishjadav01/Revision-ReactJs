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
    // console.log(res);
    setusername("");
    setpassword("");
    console.log(userData);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center flex-col bg-amber-50 ">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col gap-1 shadow-2xl rounded h-100 w-100 p-2 m-1">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <label htmlFor="" className="text-xl ">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter The Username  "
            className="text-xl border-2 rounded m-1 p-1"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label htmlFor="" className="text-xl ">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter The Password  "
            className="text-xl border-2 rounded p-1 m-1 "
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="h-9 border-2 w-95 cursor-pointer p-1 m-1 rounded-xl text-x bg-olive-500 hover:bg-olive-300 mt-6 hover:scale-95 ">
            Submit
          </button>
        </div>
      </form>
      {data.map((u, index) => {
        return (
          <>
            <div key={index}>
              <p>Username : {u.username}</p>
              <p>Password : {u.password}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
