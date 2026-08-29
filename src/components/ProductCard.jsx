import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
    const { addToCart } = useCart();

    const {
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    } = useWishlist();

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.title} added to cart!`);
    };

    const handleWishlist = () => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="product-card">

            <button
                className="wishlist-button"
                onClick={handleWishlist}
            >
                {isInWishlist(product.id) ? "❤️" : "♡"}
            </button>

            <img
                src={product.thumbnail}
                alt={product.title}
            />

            <Link to={`/product/${product.id}`}>
                <h3>{product.title}</h3>
            </Link>

            <p className="category">
                {product.category}
            </p>

            <p className="price">
                ₹{product.price}
            </p>

            <button onClick={handleAddToCart}>
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;