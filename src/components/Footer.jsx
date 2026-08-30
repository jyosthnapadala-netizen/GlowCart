import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}

                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <span>✦</span>
                        GlowCart
                    </Link>

                    <p>
                        Your destination for skincare,
                        makeup and everyday beauty essentials.
                    </p>
                </div>

                {/* Quick Links */}

                <div className="footer-column">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/cart">Cart</Link>
                </div>

                {/* Customer Care */}

                <div className="footer-column">
                    <h3>Customer Care</h3>

                    <a href="#">Help Center</a>
                    <a href="#">Shipping & Delivery</a>
                    <a href="#">Returns</a>
                    <a href="#">Privacy Policy</a>
                </div>

                {/* Contact */}

                <div className="footer-column">
                    <h3>Get in Touch</h3>

                    <p>📧 support@glowcart.com</p>
                    <p>📞 +91 98765 43210</p>
                    <p>📍 Hyderabad, India</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 GlowCart. All rights reserved.
                </p>

                <p>
                    Made with ✨ for beauty lovers
                </p>
            </div>

        </footer>
    );
}

export default Footer;
