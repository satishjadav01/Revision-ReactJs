import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <nav className="flex justify-between bg-blue-600 p-5 text-white">
        <h1 className="text-xl font-bold">MyWebsite</h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;