import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";

function Products() {
  const location = useLocation();

  const selectedCategory =
    location.state?.category || "All";

  return (
    <div>
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default Products;