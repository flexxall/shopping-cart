import React from "react";
import { Card, Button } from "react-bootstrap";
import Cart from "./Cart";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      {prod.name}
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>@ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 day delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          <Button variant="danger">Remove from cart</Button>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
