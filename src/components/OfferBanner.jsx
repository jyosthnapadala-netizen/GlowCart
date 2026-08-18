import { Link } from "react-router-dom";
import "../styles/OfferBanner.css";

function OfferBanner() {
  return (
    <section className="offer-banner">
      <div className="offer-content">
        <p className="offer-small">LIMITED TIME OFFER</p>

        <h2>Glow More, Spend Less ✨</h2>

        <p>
          Get 20% OFF on selected beauty products.
        </p>

        <Link to="/products" className="offer-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default OfferBanner;