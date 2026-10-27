import React, { use, useState } from "react";

const App = () => {
  const [serach, setserach] = useState("");

  const user = ["satish", "sureshbhai", "jadav", "Nayan"];

  const handleSubmit = (e) => {
    setserach(e.target.value);
  };

  const serachFilter = user.filter((users) => {
    return users.toUpperCase().includes(users.toLocaleLowerCase());
  });

  const displayUsers = () => {
    return serachFilter.map((user) => {
      return <p key={user}>{user}</p>;
    });
  };

  return (
    <div>
      <input
        type="text"
        value={serach}
        placeholder="search here.."
        onChange={handleSubmit}
      />

      {serachFilter.map((s) => {
        return <p key={s}>{users}</p>;
      })}
    </div>
  );
};

export default App;
