import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 rounded-xl bg-yellow-100 p-10">
      <h1 className="text-3xl font-bold">Contect Page</h1>

      <input
        type="text"
        placeholder="Enter your name"
        className="mt-4 block rounded border p-2"
      />
      <button onClick={()=>{
        alert("Hellow!")
        className = "mt-3 rounded bg-blue-600 px-4 py-2 text-white"
      }}>
        submit
      </button>
    </div>
  );
};

export default Contact;
