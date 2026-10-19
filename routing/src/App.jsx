import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/about";
import ProductDetails from "./page/ProductDetails";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element = {<ProductDetails/>}/>
        <Route path="/"/>
      </Routes>
    </div>
  );
};

export default App;
