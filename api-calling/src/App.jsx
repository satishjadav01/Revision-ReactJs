import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">User</h1>
      <div className="grid grid-cols-1">
        {users.map((u)=>{
          <div>
            <h2>{u.name}</h2>
            <p>{u.id}</p>
            <p>@{u.username}</p>
          </div>
        })}
      </div>
    </div>
  );
};

export default App;
