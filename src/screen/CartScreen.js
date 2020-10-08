import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Row,
  Col,
  ListGroup,
  Form,
  Image,
  Button,
  Card,
  Container,
  Breadcrumb,
} from "react-bootstrap";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  return (
    <Container>
      <Breadcrumb>
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
      </Breadcrumb>
      Your Shopping Cart
      {cartItems.map((item) => (
        <Card key={item.product}>
          <Row>
            <Col>
              <Image src={item.image} fluid></Image>
            </Col>
            <Col>{item.name}</Col>
            <Col>{item.qty}</Col>
            <Col>$ {item.price}</Col>
          </Row>
          <Button onClick={() => removeFromCartHandler(item.product)}>
            Remove
          </Button>
        </Card>
      ))}
      Total Items :{" "}
      {cartItems.reduce((acc, item) => acc + item.qty, 0).toFixed(0)}| Total
      price{" "}
      {cartItems
        .reduce((acc, item) => acc + item.qty * item.price, 0)
        .toFixed(2)}
    </Container>
  );
};

export default CartScreen;
