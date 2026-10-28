import React from "react";
import { useState } from "react";

const SearchProduct = () => {
  const [search, setsearch] = useState("");

  const products = ["dress", "sari", "kurta", "t-shirt"];

  const fulterProduct = products.filter((product) => {
    return product.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder="search here.."
      />

      {fulterProduct.map((product) => {
        return (
          <div key={product}>
            <p>{product}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchProduct;
