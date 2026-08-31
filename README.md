# 🛍️ GlowCart

A modern and responsive **beauty & wellness e-commerce web application** built with React. GlowCart allows users to browse products, search and filter products, view product details, manage cart items, maintain a wishlist, and complete a simulated checkout flow.

## 🚀 Live Project

> Add your deployed application URL here after deployment.

## 📌 Features

### 🏠 Home Page

* Promotional hero banners
* Featured products
* Best-selling products
* Category sections
* Offers and promotional sections
* Why Choose Us section

### 🛍️ Product Management

* Product listing
* Product details page
* Product categories
* Search products
* Product filtering
* API-based product fetching using Axios
* Loading and error states

### 🛒 Shopping Cart

* Add products to cart
* Increase/decrease product quantity
* Remove products from cart
* Automatically calculate cart totals
* Checkout flow
* Order success page

### ❤️ Wishlist

* Add products to wishlist
* Remove products from wishlist
* Prevent duplicate wishlist items
* Dedicated wishlist page

### 🧭 Navigation

* React Router based navigation
* Product details routes
* Cart, wishlist and checkout routes
* Scroll-to-top functionality
* Responsive navigation

### 📱 Responsive Design

* Responsive product layouts
* Mobile-friendly forms
* Responsive cart and checkout pages
* Mobile-friendly navigation and UI

## 🛠️ Tech Stack

| Technology        | Usage                                 |
| ----------------- | ------------------------------------- |
| React             | Building reusable UI components       |
| JavaScript (ES6+) | Application logic                     |
| React Router      | Client-side routing                   |
| Axios             | REST API integration                  |
| Context API       | Global state management               |
| HTML5             | Page structure                        |
| CSS3              | Styling and responsive design         |
| Vite              | Development and production build tool |
| Git & GitHub      | Version control                       |

## 🧠 React Concepts Used

This project demonstrates practical usage of:

* Functional Components
* Props
* State Management with `useState`
* Side Effects with `useEffect`
* Context API
* Custom Hooks
* Conditional Rendering
* List Rendering
* Event Handling
* React Router
* Reusable Components
* API Integration
* Loading and Error Handling
* Component-based architecture

## 🏗️ Project Structure

```text
GlowCart/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── products/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── BestSellers.jsx
│   │   ├── CategorySection.jsx
│   │   ├── PromoBanners.jsx
│   │   ├── OfferBanner.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   ├── ProductContext.jsx
│   │   ├── WishlistContext.jsx
│   │   ├── useCart.js
│   │   ├── useProducts.js
│   │   └── useWishlist.js
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderSuccess.jsx
│   │   └── Offers.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## 🔌 API Integration

GlowCart uses **Axios** for communicating with a REST API.

The API logic is separated into a dedicated service:

```text
src/services/api.js
```

Products are fetched through `ProductContext`, allowing multiple components such as the product listing, featured products, best sellers, offers, and product details pages to access the product data.

## 🌐 State Management

GlowCart uses **React Context API** for managing application-wide state.

### Product Context

Responsible for:

* Fetching products
* Product loading state
* API error state
* Sharing products across components

### Cart Context

Responsible for:

* Cart products
* Adding products
* Removing products
* Increasing quantity
* Decreasing quantity
* Clearing the cart

### Wishlist Context

Responsible for:

* Wishlist products
* Adding products
* Removing products
* Checking whether a product is already in the wishlist

Custom hooks are used to consume these contexts cleanly:

```text
useCart()
useProducts()
useWishlist()
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/jyosthnapadala-netizen/GlowCart.git
```

Navigate to the project:

```bash
cd GlowCart
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available on the local development server provided by Vite.

## 🧪 Available Scripts

### Start development server

```bash
npm run dev
```

### Run ESLint

```bash
npm run lint
```

### Create production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## ✅ Project Quality Checks

Before pushing changes to GitHub:

```bash
npm run lint
npm run build
```

Both commands currently pass successfully.

## 🔮 Future Enhancements

Possible future improvements include:

* User authentication
* Backend integration
* Persistent cart and wishlist storage
* Real payment gateway integration
* Order history
* User profile
* Product reviews and ratings
* Pagination
* Advanced product filtering
* TypeScript migration
* Automated testing
* Deployment with CI/CD

## 👩‍💻 Developer

**Jyosthna Padala**

Frontend Developer specializing in React.js and modern web application development.

### GitHub

[GlowCart Repository](https://github.com/jyosthnapadala-netizen/GlowCart?utm_source=chatgpt.com)

---

⭐ If you find this project useful, consider giving the repository a star!
