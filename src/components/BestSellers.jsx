import ProductCard from "./ProductCard";
import { useProducts } from "../context/useProducts";
import "../styles/BestSellers.css";

function BestSellers() {
    const { products, loading, error } = useProducts();

    const bestSellers = products.slice(0, 3);

    if (loading) {
        return (
            <section className="best-sellers-section">
                <h2>Best Sellers</h2>
                <p>Loading products...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="best-sellers-section">
                <h2>Best Sellers</h2>
                <p>{error}</p>
            </section>
        );
    }

    return (
        <section className="best-sellers-section">

            <h2>Best Sellers</h2>

            <p className="best-sellers-subtitle">
                Our customers' favorite beauty essentials
            </p>

            <div className="best-sellers-grid">

                {bestSellers.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </section>
    );
}

export default BestSellers;