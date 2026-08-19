import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";

function Products({ search }) {
  const location = useLocation();

  const selectedCategory =
    location.state?.category || "All";

  return (
    <div>
      <ProductList
        search={search}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Products;