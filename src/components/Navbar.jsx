import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ search, setSearch }) {
    const { cart } = useCart();

    const cartCount = cart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                GlowCart
            </Link>
            <div className="nav-links">
                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

                <Link to="/cart">
                    Cart ({cartCount})
                </Link>
            </div>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />
            </div>
        </nav>
    );
}

export default Navbar;