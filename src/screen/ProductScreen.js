import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  Breadcrumb,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import Rating from "../components/Rating";

// import products from "../products";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`/api/products/${match.params.id}`);
      const data = await response.json();

      setProduct(data);
    };

    getProducts();
  }, []);

  // const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Breadcrumb>
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Container>
        <Row>
          <Col className="product-image" md={6}>
            <Image src={product.image} fluid></Image>
          </Col>
          <Col className="product-details" md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3 className="prod-name">{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={` ${product.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>
                <p className="prod-desc">{product.description} </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>
                      <strong>Price : &nbsp;</strong>
                    </Col>
                    <Col>$ {product.price}</Col>
                  </Row>
                </ListGroupItem>
                <ListGroup.Item>
                  <Row>
                    <Col>Stock : &nbsp;</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0
                          ? "Alvailable"
                          : "Out Of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant="primary"
                    disabled={product.countInStock <= 0}
                    block
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;
