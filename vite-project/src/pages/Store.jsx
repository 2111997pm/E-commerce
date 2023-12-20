import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productData, getProduct } from "../productsStore";

const Store = () => {
  return (
    <>
      <h1 className="text-center m-3 bg-dark text-white p-3">
        WelCome To My Store
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productData.products.map((newProducts, index) => (
          <Col align="center" key={index}>
            <ProductCard product={newProducts} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
