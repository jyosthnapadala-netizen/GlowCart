import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/BestSellers.css";

function BestSellers() {
  const bestSellers = products.filter(
    (product) =>
      product.id === 1 ||
      product.id === 2 ||
      product.id === 5
  );

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