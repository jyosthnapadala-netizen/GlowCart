import { useWishlist } from "../context/WishlistContext";
import "../styles/Wishlist.css";

function Wishlist() {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="wishlist-page">
            <h1>My Wishlist ❤️</h1>

            {wishlist.length === 0 ? (
                <p className="empty-wishlist">
                    Your wishlist is empty.
                </p>
            ) : (
                <div className="wishlist-grid">
                    {wishlist.map((product) => (
                        <div
                            className="wishlist-card"
                            key={product.id}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                onError={(event) => {
                                    event.currentTarget.src = "/images/product-placeholder.jpg";
                                }}
                            />

                            <h3>{product.title}</h3>

                            <p className="category">
                                {product.category}
                            </p>

                            <p className="price">
                                ₹{product.price}
                            </p>

                            <button
                                onClick={() =>
                                    removeFromWishlist(product.id)
                                }
                            >
                                Remove ❤️
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;
