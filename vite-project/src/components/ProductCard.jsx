import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQunatity = cart.getProductQunatity(product.id);
  console.log(cart.items);
  
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <img src={product.images[0]} height={200} width={300}/>
          <Card.Text>$ {product.price}</Card.Text>
          {productQunatity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">
                  In Cart : {productQunatity}
                </Form.Label>
                <Col sm="6">
                  <Button
                    sm="6"
                    className="mx-2"
                    onClick={() => cart.addOneToCart(product.id)}
                  >
                    +
                  </Button>
                  <Button
                    sm="6"
                    className="mx-2"
                    onClick={() => cart.removeOneFromCart(product.id)}
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variant="danger"
                className="my-2"
                onClick={() => cart.deletFromCart(product.id)}
              >
                Remove From Cart
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={() => cart.addOneToCart(product.id)}
            >
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
