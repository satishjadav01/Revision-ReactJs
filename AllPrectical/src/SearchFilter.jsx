import React from "react";
import { useState } from "react";

const SearchFilter = () => {
  const [search, setsearch] = useState("");

  const users = ["satihs", "kanu", "gajraj", "sanjay"];

  const searchFilterUser = users.filter((user) => {
    return user.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input type="text"
      value={search}
      placeholder="search here.."
      onChange={(e)=>setsearch(e.target.value)} />

      {searchFilterUser.map((user) => {
        return (
          <div key={user}>
            <p>{user}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchFilter;
