import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <h1 className="mb-5 text-center text-3xl font-bold">Posts</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {user.map((u) => (
          <div key={u.id} className="rounded-lg bg-white p-4 shadow">
            <h2 className="font-bold">ID: {u.id}</h2>
            <p>User ID: {u.userId}</p>
            <p>{u.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;