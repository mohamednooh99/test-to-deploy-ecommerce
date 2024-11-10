import React, { useContext, useState } from "react";
import { CartContext } from "../_context/CartContext";
import Image from "next/image";
import Link from "next/link";
import DeleteBtn from "./ui/DeleteBtn";
import UpdateQuantity from "./ui/UpdateQuantity";

function Cart() {
  const { cart, openCart, setOpenCart } = useContext(CartContext);
  console.log(cart);

  if (!openCart) return null;
  return (
    <div
      className="z-10 absolute top-8 right-0 w-screen max-w-[250px] max-h-[330px] overflow-auto rounded  bg-gray-100 px-2 py-4 sm:px-6 lg:px-4"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <button
        className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
        onClick={() => setOpenCart(false)}
      >
        <span className="sr-only">Close Cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item) => (
            <li key={item?.id} className="flex items-center gap-2 ">
              <Image
                src={item?.product?.banner?.url}
                width={100}
                height={100}
                alt={item?.product?.title}
                className="size-16 rounded object-cover"
              />
              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">
                  {item?.product?.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">{item?.product?.category}</dt>
                  </div>

                  <div>
                    <dt className="inline">${item?.product?.price }</dt>
                  </div>
                </dl>
              </div>
              <div className="flex items-center ">
                <UpdateQuantity
                  documentId={item?.documentId}
                  currentQuantity={item?.quantity}
                />
              </div>
              <DeleteBtn documentId={item?.documentId} type="primary">
                <span className="sr-only">Remove item </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </DeleteBtn>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center ">
          <Link
            onClick={() => setOpenCart(false)}
            href="/cart"
            className="block rounded bg-teal-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-teal-600"
          >
            {" "}
            View my cart {cart?.length}{" "}
          </Link>

          <button
            onClick={() => setOpenCart(false)}
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-teal-600"
          >
            {" "}
            Continue shopping{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
