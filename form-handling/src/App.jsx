import React from "react";

const App = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-amber-50">
      <form action="">
        <div className="flex flex-col justify-center shadow-2xl h-100 w-120 m-5 p-1 bg-amber-100">
          <h1 className="font-bold text-3xl text-center"> Login</h1>
          <label htmlFor="" className="text-xl p-1 m-1">
            Username
          </label>
          <input
            type="text"
            placeholder="enter username"
            className="text-xl border-2 p-1 m-2 rounded"
          />
          <label htmlFor="" className="text-xl p-1 m-1">
            Password
          </label>
          <input
            type="password"
            placeholder="enter password"
            className="text-xl border-2 p-1 m-2 rounded"
          />
          <button className="h-10   bg-amber-300 m-1 p-1 rounded cursor-pointer hover:bg-amber-400 hover:scale-95 mt-5">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
