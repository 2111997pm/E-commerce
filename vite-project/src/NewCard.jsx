import React from "react";
import Card from "react-bootstrap/Card";
import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { getProduct } from "./productsStore";

const NewCard = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;

  const quantity = props.quantity;
  const myData = getProduct(id);
  return (
    <>
      <center>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={myData.images[1]}/>
          <Card.Body>
            <Card.Title>{myData.title}</Card.Title>
            <Card.Text>{myData.description}</Card.Text>
            <Button variant="primary" onClick={() => cart.deletFromCart(id)}>
              remove
            </Button>
          </Card.Body>
        </Card>
        <hr></hr>
      </center>
    </>
  );
};

export default NewCard;
