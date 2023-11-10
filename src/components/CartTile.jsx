import { useState } from "react";
import RemoveBtn from "./RemoveBtn";

const CartTile = ({ item, getAllCartPrice }) => {
  const [count, setCount] = useState(1);
  const [displayPrice, setDisplayPrice] = useState(item.price);

  const changeItemValue = (type) => {
    console.log(count);
    if (type == 1) {
      setCount((prev) => prev + 1);
      setDisplayPrice(item.price * (count + 1));
      getAllCartPrice(item.price);
    } else {
      if (count <= 1) {
        alert("Number of item can't  less than 1");
        return;
      } else {
        setCount((prev) => prev - 1);
        setDisplayPrice(item.price * (count - 1));
        getAllCartPrice(-item.price);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-3 mb-3 ">
        <div className="w-[25%]">
          <div className="flex mt-2 gap-3 items-center">
            <div className="image-box w-full p-4 border rounded-md shadow bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-scale-down"
              />
            </div>
          </div>
        </div>
        <div className="w-[73%]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 w-full">
              <h4 className="md:text-xl text-base font-semibold">
                {item.title}
              </h4>
              <p className="text-base">{displayPrice.toFixed(2)}</p>
              <RemoveBtn />
            </div>
            <div className="flex items-center justify-between md:w-1/3 w-2/3 pr-3">
              <div
                className="rounded-full p-1 bg-[#f6f7fb]"
                role="button"
                onClick={() => {
                  changeItemValue(-1);
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  role="img"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  ></path>
                </svg>
              </div>
              <p>{count}</p>
              <div
                className="rounded-full p-1 bg-[#f6f7fb]"
                role="button"
                onClick={() => {
                  changeItemValue(1);
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  role="img"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTile;
