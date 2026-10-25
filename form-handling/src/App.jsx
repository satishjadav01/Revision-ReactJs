import React from "react";

const App = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center flex-col ">
      <form action="">
        <div className="flex justify-center flex-col m-2 p-2">
          <label htmlFor="" className="text-xl ">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter The Username  "
            className="text-xl border-2 rounded"
          />
          <label htmlFor="" className="text-xl ">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter The Password  "
            className="text-xl border-2 rounded"
          />
          <button className="h-9 border-2 w-56 cursor-pointer p-1 m-1 rounded-xl text-x">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
