import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Products</h1>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
            <div className="card h-100">

              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.category}</p>
                <h5>${product.price}</h5>

                <button className="btn btn-warning w-100">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;