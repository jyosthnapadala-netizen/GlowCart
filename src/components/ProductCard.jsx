import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="product-card">

            <img
                src={product.image}
                alt={product.name}
            />

            <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
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