import React, { useState } from "react";

const App = () => {
  
const [num, setNum] = useState(10);

function changeV() {
  setNum(30);
}

  return (
    <div>
      <h1>value of A {num}</h1>
      <button onClick={changeV}>click</button>
    </div>
  );
};

export default App;
