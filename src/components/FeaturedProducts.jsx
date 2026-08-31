import { Link } from "react-router-dom";
import { useProducts } from "../context/useProducts";
import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";

function FeaturedProducts() {
    const { products, loading, error } = useProducts();

    const featuredProducts = products.slice(0, 4);

    return (
        <section className="featured-section">

            <div className="featured-heading">
                <p className="featured-label">
                    OUR COLLECTION
                </p>

                <h2>Featured Products</h2>

                <p className="featured-subtitle">
                    Discover our popular beauty essentials
                </p>
            </div>

            {loading && (
                <p className="featured-message">
                    Loading beauty products...
                </p>
            )}

            {error && (
                <p className="featured-message">
                    Unable to load products.
                </p>
            )}

            {!loading && !error && (
                <>
                    <div className="featured-grid">
                        {featuredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    <Link
                        to="/products"
                        className="view-products-btn"
                    >
                        View All Products
                    </Link>
                </>
            )}

        </section>
    );
}

export default FeaturedProducts;
