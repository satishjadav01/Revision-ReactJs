import React, { useEffect, useState } from "react";
import axios from "axios"; 
  
const FetchAPi = () => { 
  const [error, seterror] = useState(""); 
  const [users, setusers] = useState([]); 
  const [loading, setloading] = useState(true);  

  useEffect(() => { 
    const fetchUserData = async () => {  
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users", 
        );
        // console.log(res);
        setusers(res.data);
        console.log(res.data);  
      } catch (error) {  
        console.log(error); 
      } finally {
        setloading(false); 
      } 
      if (loading) return <p>Loadig....</p>; 
      if (error) return <p>{error}</p>;   
    };   
    fetchUserData(); 
  }, []);

  return (  
    <div>
     {users.map((user)=>{
        return (<div key={user.id}> 
            <p>Id : {user.id}</p>
            <p>Name : {user.name}</p>
            <p>Address : {user.address.street}</p>  
        </div>)  
     })} 
    </div>
  );
};

export default FetchAPi;
