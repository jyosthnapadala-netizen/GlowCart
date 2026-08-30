
import { Link } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
    const orderNumber = `GC${Math.floor(100000 + Math.random() * 900000)}`;

    return (
        <div className="order-success">
            <div className="success-card">

                <div className="success-icon">
                    ✓
                </div>

                <h1>Order Placed Successfully!</h1>

                <p className="success-message">
                    Thank you for shopping with GlowCart.
                </p>

                <p>
                    Your order has been confirmed and is being prepared.
                </p>

                <div className="order-number">
                    <span>Order Number</span>
                    <strong>{orderNumber}</strong>
                </div>

                <p className="delivery-message">
                    We hope you enjoy your beauty products! ✨
                </p>

                <Link
                    to="/products"
                    className="continue-shopping"
                >
                    Continue Shopping
                </Link>

            </div>
        </div>
    );
}

export default OrderSuccess;
