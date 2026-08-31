import { useState } from "react";
import { useProducts } from "../context/useProducts";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({
  search = "",
  selectedCategory = "All"
}) {
  const { products, loading, error } = useProducts();

  const [category, setCategory] = useState(selectedCategory);

  // Loading state
  if (loading) {
    return (
      <section className="products-section">
        <h2>Our Products</h2>
        <p>Loading products...</p>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="products-section">
        <h2>Our Products</h2>
        <p>{error}</p>
      </section>
    );
  }

  const filteredProducts = products.filter((product) => {
    const productName = product.title || "";
    const searchText = search || "";

    const matchesSearch = productName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="category-buttons">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Skincare")}>
          Skincare
        </button>

        <button onClick={() => setCategory("Makeup")}>
          Makeup
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
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

export default ProductList;