import React, { useState } from "react";
  
const App = () => {
 
  const [count, setcount] = useState(0);
   
  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-amber-50">
      <h1 className="text-2xl font-semibold ">
        COUNTER :{" "} 
        <span className="text-3xl font-extrabold text-red-500">{count}</span>
      </h1>
      <div className="h-100 w-120 items-center justify-center flex absolute mt-45 m-1 p-2 shadow-2xl">    
        <button   
          className="h-9 w-47 text-xl p-1 m-1 bg-amber-300 rounded-xl cursor-pointer hover:scale-95 hover:bg-amber-400
        "   
          onClick={() => setcount(count + 1)}
        >     
          Increment      
        </button>   
        <button
          className="h-9 w-47 text-xl p-1 m-1 bg-amber-300 rounded-xl cursor-pointer hover:scale-95 hover:bg-amber-400"   
          onClick={() => setcount(count - 1)}
        >   
          Decrement    
        </button>   
        <button  
          className="h-9 w-47 text-xl p-1 m-1 bg-amber-300 rounded-xl cursor-pointer hover:scale-95 hover:bg-amber-400"
          onClick={() => setcount(0)}     
        >        
          Reset     
        </button>     
      </div>
    </div>
  );
};

export default App;
