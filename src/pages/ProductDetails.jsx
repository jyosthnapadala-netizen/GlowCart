import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    const product = products.find(
        (item) => item.id === Number(id)
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
                        alt={product.name}
                    />
                </div>

                <div>

                    <p>{product.category}</p>

                    <h1>{product.name}</h1>

                    <h2>₹{product.price}</h2>

                    <p>{product.description}</p>

                    {/* QUANTITY */}
                    <div className="quantity-control">

                        <button
                            type="button"
                            onClick={() =>
                                setQuantity(
                                    (previousQuantity) =>
                                        Math.max(
                                            1,
                                            previousQuantity - 1
                                        )
                                )
                            }
                        >
                            -
                        </button>

                        <span>{quantity}</span>

                        <button
                            type="button"
                            onClick={() =>
                                setQuantity(
                                    (previousQuantity) =>
                                        previousQuantity + 1
                                )
                            }
                        >
                            +
                        </button>

                    </div>

                    {/* ADD TO CART */}
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