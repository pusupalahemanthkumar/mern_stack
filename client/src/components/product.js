// Importing required files and packages here.
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

// Defining functional component here.
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded card bg-light mb-3">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
