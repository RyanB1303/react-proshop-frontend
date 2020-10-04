import React from "react";
import { Row, Col } from "react-bootstrap";

import "../products";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
    <>
      <h1>Our Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
