import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/about";
import ProductDetails from "./page/ProductDetails";
import Product from "./page/Product";
import Contact from "./page/Contact";
import NotFound from "./page/NotFound";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element = {<Product/>}/>
        <Route path="/product/:id"
        element={<ProductDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
