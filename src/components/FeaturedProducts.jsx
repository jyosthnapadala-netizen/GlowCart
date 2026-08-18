import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="featured-section">
      <h2>Featured Products</h2>

      <p className="featured-subtitle">
        Discover our popular beauty essentials
      </p>

      <div className="featured-grid">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Link to="/products" className="view-products-btn">
        View All Products
      </Link>
    </section>
  );
}

export default FeaturedProducts;