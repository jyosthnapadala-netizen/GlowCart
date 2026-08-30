import { useNavigate } from "react-router-dom";
import "../styles/CategorySection.css";

function CategorySection() {
    const navigate = useNavigate();

    const categories = [
        {
            name: "Skincare",
            icon: "🧴",
        },
        {
            name: "Makeup",
            icon: "💄",
        },
        {
            name: "Hair Care",
            icon: "💇‍♀️",
        },
        {
            name: "Fragrance",
            icon: "🌸",
        },
        {
            name: "Body Care",
            icon: "🛁",
        },
        {
            name: "Nails",
            icon: "💅",
        },
    ];

    const handleCategoryClick = (category) => {
        navigate("/products", {
            state: { category },
        });
    };

    return (
        <section className="category-section">

            <div className="section-heading">
                <p className="section-subtitle">
                    EXPLORE OUR COLLECTION
                </p>

                <h2>Shop by Category</h2>

                <p className="section-description">
                    Find everything you need for your beauty routine.
                </p>
            </div>

            <div className="category-list">

                {categories.map((category) => (
                    <button
                        key={category.name}
                        className="category-card"
                        onClick={() =>
                            handleCategoryClick(category.name)
                        }
                    >
                        <span className="category-icon">
                            {category.icon}
                        </span>

                        <span className="category-name">
                            {category.name}
                        </span>

                        <span className="category-arrow">
                            →
                        </span>
                    </button>
                ))}

            </div>

        </section>
    );
}

export default CategorySection;