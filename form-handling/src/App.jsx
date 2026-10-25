import React, { useState } from "react";

const App = () => {

const [username, setusername] = useState("")
const [password, setpassword] = useState("")

const handleSubmit =(e)=>{
  e.preventDefault();
}

  return (
    <div className="flex h-screen w-full justify-center items-center flex-col bg-amber-50 ">
      <form action="">
        <div className="flex justify-center flex-col gap-1 shadow-2xl rounded h-100 w-100 p-2 m-1">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <label htmlFor="" className="text-xl ">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter The Username  "
            className="text-xl border-2 rounded m-1 p-1"
          />
          <label htmlFor="" className="text-xl ">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter The Password  "
            className="text-xl border-2 rounded p-1 m-1 "
          />
          <button className="h-9 border-2 w-95 cursor-pointer p-1 m-1 rounded-xl text-x bg-olive-500 hover:bg-olive-300 mt-6 hover:scale-95 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
