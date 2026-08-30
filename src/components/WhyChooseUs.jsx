import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
    const benefits = [
        {
            icon: "🚚",
            title: "Fast Delivery",
            description:
                "Get your favorite beauty products delivered quickly and safely."
        },
        {
            icon: "🔒",
            title: "Secure Payment",
            description:
                "Shop with confidence using a safe and secure checkout experience."
        },
        {
            icon: "↩️",
            title: "Easy Returns",
            description:
                "Enjoy a simple and hassle-free return experience on eligible products."
        },
        {
            icon: "✨",
            title: "Quality Products",
            description:
                "Discover carefully selected beauty essentials for your daily routine."
        }
    ];

    return (
        <section className="why-section">

            <div className="why-header">
                <p className="why-label">
                    THE GLOWCART PROMISE
                </p>

                <h2>
                    Why Choose GlowCart?
                </h2>

                <p className="why-subtitle">
                    Everything you need for a simple, secure and
                    enjoyable beauty shopping experience.
                </p>
            </div>

            <div className="why-grid">

                {benefits.map((benefit) => (
                    <div
                        className="why-card"
                        key={benefit.title}
                    >
                        <div className="why-icon">
                            {benefit.icon}
                        </div>

                        <h3>
                            {benefit.title}
                        </h3>

                        <p>
                            {benefit.description}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default WhyChooseUs;