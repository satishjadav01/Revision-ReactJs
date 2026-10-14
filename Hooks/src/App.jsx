import React, { useState } from "react";

const App = () => {
  
const [num, setNum] = useState(10)
  
  return (
    <div>
      <h1>value of A {num}</h1>
      <button>click</button>
    </div>
  );
};

export default App;
