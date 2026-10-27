import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const users = ["Rahul", "Amit", "Priya", "Neha"];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user"
      />

      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
};

export default App;