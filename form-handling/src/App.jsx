import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("")
  const [data, setdata] = useState([])


  const handLeSubmit = (e) =>{
    e.prevetDefault()
    const userData = {
      username : username,
      password: password
    }
  }

  return (
    <div className="">
      <h1>Form Handling in React Js</h1>
      <form action="" onSubmit={handLeSubmit} >
        <label htmlFor=""> Username
          <input type="text"  />
        </label>
      </form>
    </div>
  );
};

export default App;
