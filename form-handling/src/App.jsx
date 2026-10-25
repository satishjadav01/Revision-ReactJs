import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");

  return (
    <div className="">
      <h1>Form Handling in React Js</h1>
      <form action="">
        <label htmlFor=""> Username
          <input type="text"  />
        </label>
      </form>
    </div>
  );
};

export default App;
