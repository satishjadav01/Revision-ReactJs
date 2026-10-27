import React, { useState } from "react";

const App = () => {
  const [search, setsearch] = useState("");

  const products = ["dress", "kurta", "t-shirt", "ring"];

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  const searchFilter = products.filter((product) => {
    return product.toLowerCase().includes(product.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="search here.."
        onChange={handleSearch}
      />
      {searchFilter.map((product)=>{
        <p key={product}>{product}</p>
      })}
    </div>
  );
};

export default App;
