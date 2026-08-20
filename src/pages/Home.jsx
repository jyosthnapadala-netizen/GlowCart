import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferBanner from "../components/OfferBanner";
import BestSellers from "../components/BestSellers";
import WhyChooseUs from "../components/WhyChooseUs";
import PromoBanners from "../components/PromoBanners";

function Home() {
  return (
    <div>
      <Hero />
      <PromoBanners />

      <CategorySection />

      <FeaturedProducts />
      <OfferBanner />
      <BestSellers />
      <WhyChooseUs />
    </div>
  );
}

export default Home;