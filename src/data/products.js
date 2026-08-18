import faceWash from "../assets/products/face-wash.jpg";
import serum from "../assets/products/serum.jpg";
import moisturizer from "../assets/products/moisturizer.jpg";
import lipstick from "../assets/products/lipstick.jpg";
import vitaminC from "../assets/products/vitamin-c.jpg";
import lipBalm from "../assets/products/lip-balm.jpg";

const products = [
  {
    id: 1,
    name: "Glow Face Wash",
    category: "Skincare",
    price: 499,
    image: faceWash,
    description: "Gentle face wash for clean and glowing skin."
  },
  {
    id: 2,
    name: "Hydrating Serum",
    category: "Skincare",
    price: 699,
    image: serum,
    description: "Hydrating serum for a fresh and healthy look."
  },
  {
    id: 3,
    name: "Daily Moisturizer",
    category: "Skincare",
    price: 599,
    image: moisturizer,
    description: "Lightweight moisturizer for everyday use."
  },
  {
    id: 4,
    name: "Matte Lipstick",
    category: "Makeup",
    price: 399,
    image: lipstick,
    description: "Long-lasting matte lipstick."
  },
  {
    id: 5,
    name: "Vitamin C Cream",
    category: "Skincare",
    price: 799,
    image: vitaminC,
    description: "Vitamin C cream for brighter-looking skin."
  },
  {
    id: 6,
    name: "Lip Balm",
    category: "Makeup",
    price: 199,
    image: lipBalm,
    description: "Moisturizing lip balm for daily use."
  }
];

export default products;