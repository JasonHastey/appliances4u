import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  Carousel,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { listProductDetails } from "../redux/actions/productActions";

const ProductPage = ({ history, match }) => {
  const [qty, set_qty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
    //history.push(`/cart/`)
  }

  return (
    <div>
      <Link to="/" className="btn btn-dark">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : (
        <Container>
          <Row className="pt-4">
            <Col md={7}>
              <Carousel>
                {product.images &&
                  product.images.map((img) => (
                    <Carousel.Item>
                      <Image src={img} fluid />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    <strong>{product.brand} </strong>
                    {product.name}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col md={8}>
              <ul>
                {product.features &&
                  product.features.map((feature) => <li>{feature}</li>)}
              </ul>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>QTY</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => {
                              set_qty(e.target.value);
                            }}
                          >
                            {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      type="button"
					  disabled={product.countInStock === 0}
					  onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductPage;
