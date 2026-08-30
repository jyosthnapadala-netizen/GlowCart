import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ search, setSearch }) {
    const { cart } = useCart();

    const cartCount = cart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    return (
        <nav className="navbar">

            {/* Logo */}

            <Link to="/" className="logo">
                <span className="logo-icon">✦</span>
                GlowCart
            </Link>

            {/* Navigation */}

            <div className="nav-links">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Products
                </NavLink>


                <NavLink to="/offers">
                    Offers
                </NavLink>

            </div>

            {/* Search */}

            <div className="search-box">
                <span className="search-icon">⌕</span>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />
            </div>

            {/* Cart */}

            <Link to="/cart" className="cart-link">
                <span className="cart-icon">🛒</span>

                <span className="cart-text">
                    Cart
                </span>

                {cartCount > 0 && (
                    <span className="cart-count">
                        {cartCount}
                    </span>
                )}
            </Link>

        </nav>
    );
}

export default Navbar;