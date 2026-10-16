
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Users</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((u) => (
          <div key={u.id} className="rounded-lg bg-white p-4 shadow">
            <h2 className="font-bold">{u.name}</h2>
            <p>ID: {u.id}</p>
            <p>@{u.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
