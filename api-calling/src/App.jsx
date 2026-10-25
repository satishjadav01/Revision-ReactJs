import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchUserdata() {
      try {
        let res = await axios.get("https://dummyjson.com/users");
        console.log(res);
        setdata(res.data.users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserdata();
  }, []);

  return (
    <div>
      {data.map((u, index) => {
        return (
          <>
            <div key={index}>
              <p>{u.id}</p>
              <p>{u.firstname}</p>
              <p>{u.id}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
