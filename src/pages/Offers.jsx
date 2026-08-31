import { useState } from "react";
import { useProducts } from "../context/useProducts";
import ProductCard from "../components/ProductCard";
import "../styles/Offers.css";

function Offers() {
    const { products, loading, error } = useProducts();

    const [offerFilter, setOfferFilter] = useState("All");

    if (loading) {
        return (
            <section className="offers-page">
                <h1>GlowCart Offers</h1>
                <p>Loading offers...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="offers-page">
                <h1>GlowCart Offers</h1>
                <p>{error}</p>
            </section>
        );
    }

    const offerProducts = products.filter((product) => {
        if (offerFilter === "All") {
            return product.discountPercentage >= 10;
        }

        if (offerFilter === "15%+") {
            return product.discountPercentage >= 15;
        }

        if (offerFilter === "20%+") {
            return product.discountPercentage >= 20;
        }

        return true;
    });

    return (
        <section className="offers-page">

            <div className="offers-header">
                <h1>✨ GlowCart Offers</h1>

                <p>
                    Beauty deals you'll love
                </p>
            </div>

            <div className="offer-filters">

                <button
                    className={offerFilter === "All" ? "active" : ""}
                    onClick={() => setOfferFilter("All")}
                >
                    All Offers
                </button>

                <button
                    className={offerFilter === "15%+" ? "active" : ""}
                    onClick={() => setOfferFilter("15%+")}
                >
                    15%+ OFF
                </button>

                <button
                    className={offerFilter === "20%+" ? "active" : ""}
                    onClick={() => setOfferFilter("20%+")}
                >
                    20%+ OFF
                </button>

            </div>

            <div className="offers-grid">

                {offerProducts.length === 0 ? (
                    <p>No offers available.</p>
                ) : (
                    offerProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                )}

            </div>

        </section>
    );
}

export default Offers;