import { useState } from "react";
import RemoveBtn from "./RemoveBtn";
const ProductCard = ({ item, addToCart }) => {
  const [isRemove, setIsRemove] = useState(false);
  return (
    <>
      <div className="border rounded-md drop-shadow-lg px-4 pt-4 pb-20 gap-3 bg-white relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-40  w-full object-scale-down"
        />
        <p className="mt-5 text-base font-semibold">{item.title}</p>
        <p>Price: $ {item.price}</p>
        <p>Rating: {item.rating.rate}</p>
        <div className="flex mt-3">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            focusable="false"
            className="text-amber-500"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            focusable="false"
            className="text-amber-500"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            focusable="false"
            className="text-amber-500"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            focusable="false"
            className="text-amber-500"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            focusable="false"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
          </svg>
        </div>
        <div className="flex justify-end mt-3 absolute bottom-3 right-3">
          {isRemove ? (
            <RemoveBtn />
          ) : (
            <button
              onClick={() => {
                addToCart(item);
                setIsRemove(true);
              }}
              className="px-3 py-2 border-2 border-solid rounded-lg bg-gray-50 border-purple-900 text-purple-800"
            >
              <p className="mb-0">Add To Cart</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
