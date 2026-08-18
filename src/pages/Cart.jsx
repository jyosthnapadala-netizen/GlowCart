import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );

    return (
        <div className="cart-page">
            <h1 className="cart-title">Shopping Cart</h1>

            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <div className="cart-container">

                    <div className="cart-items">
                        {cart.map((product) => (
                            <div
                                className="cart-item"
                                key={product.id}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="cart-image"
                                />

                                <div className="cart-details">
                                    <h2>{product.name}</h2>

                                    <p className="cart-price">
                                        ₹{product.price}
                                    </p>

                                    <div className="quantity-controls">
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(product.id)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {product.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(product.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFromCart(product.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="total">
                            <span>Total</span>
                            <strong>₹{totalPrice}</strong>
                        </div>

                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}

export default Cart;