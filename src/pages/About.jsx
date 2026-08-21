import React from "react";

const About = () => {
  return (
    <div className="about-page py-5">

      {/* Hero */}
      <div className="container text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">
          Your trusted destination for quality products, great prices,
          and a smooth online shopping experience.
        </p>
      </div>

      {/* About Content */}
      <div className="container mb-5">
        <div className="row align-items-center g-4">

          <div className="col-md-6">
            <img
              src="/hero1.png"
              alt="Online Shopping"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">
              We Make Shopping Simple
            </h2>

            <p>
              Welcome to our online store! We are dedicated to providing
              high-quality products at affordable prices.
            </p>

            <p>
              Our goal is to make online shopping easy, convenient, and
              enjoyable for everyone. From discovering new products to
              placing your order, we focus on creating a smooth shopping
              experience.
            </p>

            <p>
              We carefully select our products and work hard to provide
              reliable service, secure shopping, and fast delivery.
            </p>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p className="text-muted">
            Everything you need for a better shopping experience.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center p-4 h-100">
              <h3>🛍️</h3>
              <h4 className="fw-bold">Quality Products</h4>
              <p className="text-muted">
                We offer carefully selected products with a focus on
                quality and value.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center p-4 h-100">
              <h3>💰</h3>
              <h4 className="fw-bold">Best Prices</h4>
              <p className="text-muted">
                Enjoy competitive prices and great deals on your
                favorite products.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center p-4 h-100">
              <h3>🚚</h3>
              <h4 className="fw-bold">Fast Delivery</h4>
              <p className="text-muted">
                We work to get your orders delivered quickly and safely
                to your doorstep.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mission */}
      <div className="container mt-5">
        <div className="text-center bg-dark text-white rounded p-5">
          <h2 className="fw-bold">Our Mission</h2>

          <p className="mb-0">
            Our mission is to build a trusted online shopping platform
            where customers can find quality products, enjoy affordable
            prices, and shop with confidence.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;