import { useNavigate } from "react-router-dom";
import "../styles/CategorySection.css";

function CategorySection() {
  const navigate = useNavigate();

  return (
    <section className="category-section">
      <h2>Shop by Category</h2>

      <div className="category-list">
        <button
          onClick={() =>
            navigate("/products", {
              state: { category: "Skincare" }
            })
          }
        >
          Skincare
        </button>

        <button
          onClick={() =>
            navigate("/products", {
              state: { category: "Makeup" }
            })
          }
        >
          Makeup
        </button>
      </div>
    </section>
  );
}

export default CategorySection;