import { useState } from "react";

const products = [
  { id: 1, name: "Shirt", category: "Clothes" },
  { id: 2, name: "Laptop", category: "Electronics" },
  { id: 3, name: "Jeans", category: "Clothes" },
];

function App() {
  const [category, setCategory] = useState("All");

  const filtered = products.filter(
    (p) => category === "All" || p.category === category
  );

  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Clothes</option>
        <option>Electronics</option>
      </select>

      {filtered.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export default App;