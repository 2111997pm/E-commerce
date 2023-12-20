import { createContext, useState } from "react";
import { getProduct, productData } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQunatity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: ()  => {},
  deletFromCart: () => {},
  getTotalCost: () => {},
});

const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const getProductQunatity = (id) => {
    const quantity = cartProduct.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addOneToCart = (id) => {
    
    const quantity = getProductQunatity(id);
    if (quantity === 0) {
      setCartProduct([
        ...cartProduct,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProduct(
        cartProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQunatity(id);
    if (quantity === 1) {
      deletFromCart(id);
    } else {
      setCartProduct(
        cartProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };
  const deletFromCart = (id) => {
    setCartProduct((cartProduct) =>
      cartProduct.filter((currentProduct) => currentProduct.id !== id)
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProduct.map((cartItem) => {
      const productData = getProduct(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  };

  const contextValue = {
    items: cartProduct,
    getProductQunatity,
    addOneToCart,
    removeOneFromCart,
    deletFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
