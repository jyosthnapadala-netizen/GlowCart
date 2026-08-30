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

            {/* Product Image */}
            <div className="product-image-container">

                <img
                    src={product.thumbnail}
                    alt={product.title}
                />

                {/* Wishlist */}
                <button
                    className="wishlist-button"
                    onClick={handleWishlist}
                    aria-label="Add to wishlist"
                >
                    {isInWishlist(product.id) ? "❤️" : "♡"}
                </button>

                {/* Discount */}
                {product.discountPercentage && (
                    <span className="discount-badge">
                        {Math.round(product.discountPercentage)}% OFF
                    </span>
                )}

            </div>

            {/* Product Information */}
            <div className="product-info">

                <p className="category">
                    {product.category}
                </p>

                <Link
                    to={`/product/${product.id}`}
                    className="product-title-link"
                >
                    <h3>{product.title}</h3>
                </Link>

                {/* Rating */}
                {product.rating && (
                    <div className="product-rating">
                        <span>★</span>
                        {product.rating.toFixed(1)}
                    </div>
                )}

                {/* Price */}
                <p className="price">
                    ₹{product.price}
                </p>

                {/* Add to Cart */}
                <button
                    className="add-cart-button"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
}

export default ProductCard;