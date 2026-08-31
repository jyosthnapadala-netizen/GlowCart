
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../context/useProducts";
import { useCart } from "../context/useCart";
import "../styles/ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();

    const { products, loading, error } = useProducts();

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    if (loading) {
        return <p>Loading product...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const product = products.find(
        (item) => String(item.id) === String(id)
    );

    if (!product) {
        return (
            <div>
                <h2>Product not found</h2>

                <Link to="/products">
                    Back to Products
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="product-details">

            <Link to="/products">
                ← Back to Products
            </Link>

            <div className="product-details-content">

                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                    />
                </div>

                <div>

                    <p>{product.category}</p>

                    <h1>{product.title}</h1>

                    <h2>₹{product.price}</h2>

                    <p>{product.description}</p>

                    <div className="quantity-control">

                        <button
                            type="button"
                            onClick={() =>
                                setQuantity((previousQuantity) =>
                                    Math.max(1, previousQuantity - 1)
                                )
                            }
                        >
                            -
                        </button>

                        <span>{quantity}</span>

                        <button
                            type="button"
                            onClick={() =>
                                setQuantity((previousQuantity) =>
                                    previousQuantity + 1
                                )
                            }
                        >
                            +
                        </button>

                    </div>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                    <Link to="/cart">
                        Go to Cart
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;