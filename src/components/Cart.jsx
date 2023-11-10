import { useContext, useEffect, useState } from "react";
import CartTile from "./CartTile";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const { toggleCart, cartItem } = useContext(CartContext);
  const [allCartPrice, setAllCartPrice] = useState(0);

  const getAllCartPrice = (newPrice) => {
    setAllCartPrice((prev) => prev + newPrice);
  };
  useEffect(() => {
    setAllCartPrice(
      cartItem.reduce((acc, currentValue) => {
        return acc + currentValue.price;
      }, 0)
    );
  }, []);

  return (
    <>
      <div className="fixed top-0 shadow-xl right-0 h-full bg-white z-50 md:w-2/3 w-full transition-all ease-out delay-50 duration-100 px-6 overflow-y-auto border-l-red-500 font-poppins">
        <div className="flex items-center justify-between mt-8 mb-3">
          <h4 className="text-3xl font-bold">Cart Items</h4>
          <div
            className="rounded-full p-3 bg-[#f6f7fb]"
            role="button"
            onClick={toggleCart}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              role="img"
              focusable="false"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
            </svg>
          </div>
        </div>
        <hr />
        <div className="cart-parent ">
          <div className="h-[60vh] px-4 overflow-y-auto">
            {cartItem.length === 0 ? (
              <p className="text-xl my-3 text-red-500 text-center">
                Your cart is empty
              </p>
            ) : (
              cartItem.map((item) => (
                <CartTile
                  key={item.title}
                  item={item}
                  getAllCartPrice={getAllCartPrice}
                />
              ))
            )}
          </div>
          <div></div>
          <span className=" text-xl text-red-600">Total: </span>
          <span className=" text-lg font-medium">
            {allCartPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
};

export default Cart;
