import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { CartContext } from "../context/cartContext";
import { useState } from "react";
const HomeView = () => {
  const [cartItem, setCartItem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartContext.Provider value={{ cartItem, setCartItem, toggleCart }}>
      <Navbar />
      <Products />
      {isCartOpen && <Cart />}
    </CartContext.Provider>
  );
};

export default HomeView;
