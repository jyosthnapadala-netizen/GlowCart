import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist";

function App() {
  const [search, setSearch] = useState("");

  return (
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>

            <Navbar
              search={search}
              setSearch={setSearch}
            />

            <Routes>
              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/products"
                element={<Products search={search} />}
              />
              <Route
                path="/wishlist"
                element={<Wishlist />}
              />

              <Route
                path="/product/:id"
                element={<ProductDetails />}
              />

              <Route
                path="/cart"
                element={<Cart />}
              />

              <Route
                path="/checkout"
                element={<Checkout />}
              />

              <Route
                path="/order-success"
                element={<OrderSuccess />}
              />
            </Routes>

          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;