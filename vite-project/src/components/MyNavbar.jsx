import React from "react";
import { Navbar, Modal, Button, Container, ModalHeader } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import { productData, getProduct } from "../productsStore";

import NewCard from "../NewCard";

const MyNavbar = () => {
  const cart = useContext(CartContext);

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="sm" className="bg-dark px-4">
        <Navbar.Brand href="/" className="text-white">E Commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {productCount} items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>itens in Your Cart</p>
              {cart.items.map((currentProduct, index) => (
                <NewCard
                  key={index}
                  id={currentProduct.id}
                  quantity={currentProduct.price}
                />
              ))}
              <h1>total $: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase Items</Button>
            </>
          ) : (
            <h1>your card is empty</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyNavbar;
