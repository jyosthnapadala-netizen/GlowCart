import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import Wishlist from "./pages/Wishlist";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Offers from "./pages/Offers";

function App() {
  const [search, setSearch] = useState("");

  return (
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <ScrollToTop />


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
              <Route path="/offers" element={<Offers />} />
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
            <Footer />

          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;