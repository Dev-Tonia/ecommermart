import ProductCard from "./ProductCard";
import useAxiosFetch from "../hooks/fetch";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
const Products = () => {
  const { data, isLoading, error } = useAxiosFetch("/products");
  const { cartItem, setCartItem } = useContext(CartContext);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  return (
    <>
      <section className=" py-16 px-10 md:px-16">
        {isLoading && (
          <div className=" text-center text-4xl text-green-600 flex justify-center items-center h-40">
            Loading.....
          </div>
        )}
        {error && <div>{error} </div>}
        {data && (
          <div className=" grid gap-3 sm:grid-cols-2 min-[880px]:grid-cols-3 lg:grid-cols-4">
            {data.map((item) => (
              <ProductCard key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
