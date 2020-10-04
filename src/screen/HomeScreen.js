import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

// import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch("/api/products");
      const data = await response.json(); // ini harus di json kan , karena kita pakai fetch api javascript bukan axios, di axios otomatis jadi json
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
