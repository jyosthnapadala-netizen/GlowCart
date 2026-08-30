
import { Link } from "react-router-dom";
import "../styles/OfferBanner.css";

function OfferBanner() {
    return (
        <section className="offer-banner">

            <div className="offer-decoration offer-decoration-one">
                ✦
            </div>

            <div className="offer-decoration offer-decoration-two">
                ✧
            </div>

            <div className="offer-content">

                <p className="offer-small">
                    LIMITED TIME OFFER
                </p>

                <h2>
                    Glow More, <span>Spend Less</span> ✨
                </h2>

                <p className="offer-description">
                    Enjoy 20% OFF on selected beauty essentials.
                    Treat yourself to something beautiful.
                </p>

                <Link
                    to="/products"
                    className="offer-btn"
                >
                    Shop the Offer
                    <span>→</span>
                </Link>

                <p className="offer-note">
                    *Offer available on selected products
                </p>

            </div>

        </section>
    );
}

export default OfferBanner;
