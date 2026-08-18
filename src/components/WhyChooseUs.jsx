import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section">
      <h2>Why Choose GlowCart?</h2>

      <p className="why-subtitle">
        Everything you need for a simple and beautiful shopping experience.
      </p>

      <div className="why-grid">

        <div className="why-card">
          <div className="why-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>
            Get your favorite beauty products delivered quickly.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>
            Your payment information is protected and secure.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>
            Simple and hassle-free returns on eligible products.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">✨</div>
          <h3>Quality Products</h3>
          <p>
            Carefully selected products for your beauty routine.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;