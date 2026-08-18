import { Link } from "react-router-dom";
import faceWash from "../assets/products/banner1.jpeg";
import lipstick from "../assets/products/banner2.jpeg";
import serum from "../assets/products/banner4.jpeg";
import "../styles/PromoBanners.css";

function PromoBanners() {
  return (
    <section className="promo-section">

      <div className="promo-card">
        <img src={faceWash} alt="Skincare products" />

        <div className="promo-content">
          <span>SKINCARE</span>
          <h2>Glow Starts Here</h2>
          <p>Discover your daily skincare essentials.</p>

          <Link
            to="/products"
            state={{ category: "Skincare" }}
          >
            Shop Skincare
          </Link>
        </div>
      </div>

      <div className="promo-card">
        <img src={lipstick} alt="Makeup products" />

        <div className="promo-content">
          <span>MAKEUP</span>
          <h2>Find Your Glow</h2>
          <p>Explore beauty essentials for every look.</p>

          <Link
            to="/products"
            state={{ category: "Makeup" }}
          >
            Shop Makeup
          </Link>
        </div>
      </div>

      <div className="promo-card">
        <img src={serum} alt="Beauty products" />

        <div className="promo-content">
          <span>SPECIAL OFFER</span>
          <h2>Glow More, Save More</h2>
          <p>Discover selected beauty products and offers.</p>

          <Link to="/products">
            Shop Now
          </Link>
        </div>
      </div>

    </section>
  );
}

export default PromoBanners;