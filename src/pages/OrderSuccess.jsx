import { Link } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
    return (
        <div className="order-success">
            <div className="success-card">

                <div className="success-icon">
                    ✓
                </div>

                <h1>Order Placed Successfully!</h1>

                <p>
                    Thank you for shopping with GlowCart.
                </p>

                <p>
                    Your order has been placed successfully.
                </p>

                <Link to="/products" className="continue-shopping">
                    Continue Shopping
                </Link>

            </div>
        </div>
    );
}

export default OrderSuccess;