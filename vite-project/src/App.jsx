import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Cancel from "./pages/Cancel";
import Sucess from "./pages/Sucess";
import CartProvider from "./CartContext";

const App = () => {
  return (
    <CartProvider>
      <Container>
        <MyNavbar />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Store />} />
            <Route index path="cancel" element={<Cancel />} />
            <Route index path="Sucess" element={<Sucess />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
};

export default App;
