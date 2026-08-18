import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Navbar
        search={search}
        setSearch={setSearch}
      />


      <Routes>
        <Route
          path="/"
          element={<Home search={search} />}
        />
        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;