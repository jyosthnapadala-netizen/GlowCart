import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const banner1 = "/images/banner1.jpeg";
const banner2 = "/images/banner2.jpeg";
const banner3 = "/images/banner3.jpeg";
const banner4 = "/images/banner4.jpeg";

import "../styles/Hero.css";

function Hero() {
    const banners = [
        banner1,
        banner2,
        banner3,
        banner4
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((previousSlide) =>
                (previousSlide + 1) % banners.length
            );
        }, 4000);

        return () => clearInterval(timer);
    }, [banners.length]);

    const nextSlide = () => {
        setCurrentSlide(
            (currentSlide + 1) % banners.length
        );
    };

    const previousSlide = () => {
        setCurrentSlide(
            (currentSlide - 1 + banners.length) %
            banners.length
        );
    };

    return (
        <section className="hero">

            <div className="hero-slide">

                <img
                    src={banners[currentSlide]}
                    alt="GlowCart beauty collection"
                />

                <div className="hero-overlay">

                    <p className="hero-subtitle">
                        BEAUTY ESSENTIALS
                    </p>

                    <h1>
                        Beauty That
                        <span> Glows</span>
                    </h1>

                    <p className="hero-description">
                        Discover skincare and beauty products
                        made for your everyday glow.
                    </p>

                    <Link
                        to="/products"
                        className="hero-button"
                    >
                        Shop Now
                    </Link>

                </div>

                {/* Previous button */}

                <button
                    className="hero-arrow hero-prev"
                    onClick={previousSlide}
                >
                    ‹
                </button>

                {/* Next button */}

                <button
                    className="hero-arrow hero-next"
                    onClick={nextSlide}
                >
                    ›
                </button>

                {/* Dots */}

                <div className="hero-dots">

                    {banners.map((_, index) => (
                        <button
                            key={index}
                            className={
                                currentSlide === index
                                    ? "dot active"
                                    : "dot"
                            }
                            onClick={() =>
                                setCurrentSlide(index)
                            }
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Hero;