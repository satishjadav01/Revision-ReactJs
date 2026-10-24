import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <header className="bg-gray-900 shadow-lg">
        <section className="px-10 w-full">
          <nav className="flex h-16 items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              My <span className="text-blue-400">Website</span>
            </h1>
            <ul className="flex items-center text-white gap-8">
              <li>
                <a href="" className="hover:text-amber-500">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-amber-500">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover:text-amber-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="hover:text-amber-500">
                  Login
                </a>
              </li>
            </ul>
          </nav>
          <h1></h1>
        </section>
      </header> 
    </div>
  );
};

export default App;
