import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import "../styles/Checkout.css";

function Checkout() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        paymentMethod: "COD"
    });

    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Order details:", formData);

        clearCart();

        navigate("/order-success");
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your cart is empty</h2>

                <Link to="/products">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="checkout-page">

            <h1>Checkout</h1>

            <div className="checkout-container">

                {/* Shipping Details */}
                <form
                    className="checkout-form"
                    onSubmit={handleSubmit}
                >
                    <h2>Shipping Details</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                    />

                    <h2>Payment Method</h2>

                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="COD"
                            checked={
                                formData.paymentMethod === "COD"
                            }
                            onChange={handleChange}
                        />
                        Cash on Delivery
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="UPI"
                            checked={
                                formData.paymentMethod === "UPI"
                            }
                            onChange={handleChange}
                        />
                        UPI
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="CARD"
                            checked={
                                formData.paymentMethod === "CARD"
                            }
                            onChange={handleChange}
                        />
                        Credit / Debit Card
                    </label>

                    <button type="submit">
                        Place Order
                    </button>
                </form>

                {/* Order Summary */}
                <div className="checkout-summary">

                    <h2>Order Summary</h2>

                    {cart.map((product) => (
                        <div
                            className="checkout-product"
                            key={product.id}
                        >
                            <span>
                                {product.title} × {product.quantity}
                            </span>

                            <strong>
                                ₹
                                {product.price *
                                    product.quantity}
                            </strong>
                        </div>
                    ))}

                    <hr />

                    <div className="checkout-total">
                        <span>Total</span>

                        <strong>
                            ₹{totalPrice}
                        </strong>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Checkout;