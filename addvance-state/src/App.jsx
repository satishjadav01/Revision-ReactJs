import React, { useState } from "react";

const App = () => {
    const [count, setcount] = useState(0);
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-amber-100">

            <div className="bg-amber-200 flex flex-col h-60  items-center justify-center shadow-2xs rounded-xl">
                <h1 className="text-3xl mb-5 font-semibold">COUNTER : <span className="text-red-500 font-extrabold">{count} </span></h1>

                <div>
                    <button onClick={() => setcount(count + 1)} className="h-10 w-45 bg-gray-600 rounded-xl m-1 p-1 text-white  cursor-pointer hover:scale-95">
                        Increment
                    </button>
                    <button onClick={() => setcount(count - 1)} className="h-10 w-45 bg-gray-600 rounded-xl m-1 p-1 text-white cursor-pointer hover:scale-95">
                        Decrement
                    </button>
                    <button onClick={() => setcount(0)} className="h-10 w-45 bg-gray-600 rounded-xl m-1 p-1 text-white cursor-pointer hover:scale-95">
                        Rest
                    </button>
                </div>
            </div>

        </div>
    );
};


export default App;
