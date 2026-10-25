import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchUserdata() {
      try {
        const res = await axios.get("https://dummyjson.com/users");
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
              <span>{u.firstName}</span>
              <span>{u.maidenName}</span>
              <span>{u.lastName}</span>
             
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
