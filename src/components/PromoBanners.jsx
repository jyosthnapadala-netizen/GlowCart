
import { Link } from "react-router-dom";
import faceWash from "../assets/products/banner1.jpeg";
import lipstick from "../assets/products/banner2.jpeg";
import serum from "../assets/products/banner4.jpeg";
import "../styles/PromoBanners.css";

function PromoBanners() {
    const promos = [
        {
            image: faceWash,
            label: "SKINCARE",
            title: "Glow Starts Here",
            description:
                "Build a simple routine with everyday skincare essentials.",
            button: "Shop Skincare",
            category: "Skincare",
        },
        {
            image: lipstick,
            label: "MAKEUP",
            title: "Find Your Glow",
            description:
                "Discover beauty essentials made for every look.",
            button: "Shop Makeup",
            category: "Makeup",
        },
        {
            image: serum,
            label: "GLOWCART PICKS",
            title: "Glow More, Save More",
            description:
                "Explore our handpicked beauty favourites.",
            button: "Shop Collection",
            category: null,
        },
    ];

    return (
        <section className="promo-section">

            <div className="promo-heading">
                <p>BEAUTY EDIT</p>
                <h2>Made for Your Glow</h2>
            </div>

            <div className="promo-grid">

                {promos.map((promo) => (
                    <div
                        className="promo-card"
                        key={promo.title}
                    >
                        <img
                            src={promo.image}
                            alt={promo.title}
                        />

                        <div className="promo-overlay">
                            <div className="promo-content">

                                <span>{promo.label}</span>

                                <h3>{promo.title}</h3>

                                <p>
                                    {promo.description}
                                </p>

                                <Link
                                    to="/products"
                                    state={
                                        promo.category
                                            ? {
                                                category:
                                                    promo.category,
                                            }
                                            : undefined
                                    }
                                >
                                    {promo.button}
                                    <span className="promo-arrow">
                                        →
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default PromoBanners;
