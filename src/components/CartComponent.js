import React, { useContext } from "react";
import { CartContext } from "../context/cart.js";
import { UilAngleLeftB, UilTrashAlt } from "@iconscout/react-unicons";

function CartComponent() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    showModal,
    setShowModal,
    updateQuantity,
  } = useContext(CartContext);

  return (
    showModal && (
      <div className="fixed flex flex-col justify-between  top-0 w-full right-0 h-full md:w-1/2 lg:w-1/3  bg-gray-50 shadow-md overflow-y-auto">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-2">
            <div onClick={() => setShowModal(false)}>
              <UilAngleLeftB className="cursor-pointer" size={40} />
            </div>
            <h2 className="text-base font-normal">Back to Shopping</h2>
          </div>
        </div>
        <div className="mt-8">
          <ul role="list" className="-my-6 divide-y divide-gray-200 ">
            {cartItems.map((product) => (
              <li key={product.id} className="flex  p-6 ">
                <div className="h-full w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="flex flex-col justify-evenly mx-3  w-1/2 flex-wrap">
                  <div className="p-3">
                    <h2 className="text-sm text-gray-500">{product.size}</h2>
                    <p className="my-1 text-[15px] font-normal">
                      {product.title}
                    </p>
                  </div>
                  <div className="  self-center">
                    <div className="border border-gray-200 flex items-center  justify-evenly w-1/2">
                      <button
                        className="bg-gray-200 text-black  w-full"
                        onClick={() =>
                          updateQuantity(product, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        className="w-full  md:w-1/2 mx-2 text-center"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity(product, parseInt(e.target.value))
                        }
                      />

                      <button
                        className="bg-gray-200 text-black  w-full"
                        onClick={() =>
                          updateQuantity(product, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mx-3  w-2/6 flex flex-col items-end justify-between">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(product);
                    }}
                    className="p-3"
                  >
                    <UilTrashAlt />
                  </div>

                  <div className="p-3 ">{product.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3  bg-white shadow-2xl shadow-black w-full mt-6">
          <div className="flex justify-between">
            <div className="p-4 flex flex-col justify-evenly h-2/3 max-w-xs">
              <div>
                <h2 className="text-lg font-normal">Subtotal</h2>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold">
                  Shipping, taxes and discounts calculated at checkout.
                </p>
              </div>
            </div>
            <div className="p-4 flex flex-col justify-evenly h-2/3 max-w-xs">
              <h3>{`${getCartTotal()} E£`}</h3>
            </div>
          </div>
          <button className="bg-black text-white w-full p-3 my-1 rounded-lg hover:bg-inherit hover:border-[1px] hover:border-black hover:text-black">
            Checkout
          </button>
        </div>
      </div>
    )
  );
}

export default CartComponent;
