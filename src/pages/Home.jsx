import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <Carousel interval={3000} controls indicators fade>

        {/* Slide 1 */}
        <Carousel.Item>
          <img
            src="/hero1.png"
            className="d-block w-100 hero-img"
            alt="Amazing Products"
          />

          <Carousel.Caption className="hero-content">
            <h1>Discover Amazing Products</h1>
            <p>
              Shop the latest trends and amazing products at the best prices.
            </p>

            <Link to="/products" className="btn btn-warning btn-lg">
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            src="/hero2.png"
            className="d-block w-100 hero-img"
            alt="Best Deals"
          />

          <Carousel.Caption className="hero-content">
            <h1>Best Deals For You</h1>
            <p>
              Get amazing discounts and discover your favorite products.
            </p>

            <Link to="/products" className="btn btn-warning btn-lg">
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            src="/hero3.png"
            className="d-block w-100 hero-img"
            alt="New Collection"
          />

          <Carousel.Caption className="hero-content">
            <h1>New Collection</h1>
            <p>
              Explore our latest collection and find something you love.
            </p>

            <Link to="/products" className="btn btn-warning btn-lg">
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Hero;