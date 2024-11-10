"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../_context/CartContext";
import Image from "next/image";
import DeleteBtn from "../_component/ui/DeleteBtn";
import ButtonUi from "../_component/ui/ButtonUi";
import { useRouter } from "next/navigation";
import { BsBagXFill } from "react-icons/bs";
import Link from "next/link";
import UpdateQuantity from "../_component/ui/UpdateQuantity";

function Cart() {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  const getTotalAmount = () => {
    let totaleAmount = 0;
    cart?.forEach((item) => {
      totaleAmount += Number(item?.product?.price) * item?.quantity;
    });
    return totaleAmount;
  };
  useEffect(() => {
    document.title = `Elessi Cart`;
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 2000);  
    return () => clearTimeout(timer);
  }, [cart]);
  return (
    <section>
      <div className="mx-auto  py-8  sm:py-12 ">
        <div className="mx-auto ">
          <header className="text-center space-y-3 py-8 bg-gray-100">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Shopping Cart
            </h1>
            <p className="text-s "> Home </p>
          </header>
          {loading ? (
            <div className="flex flex items-center gap-4 mx-20 my-10">
              <div className="bg-slate-200 animate-pulse rounded h-[100px] w-[100px]"></div>
              <div className="grid grid-cols-1 gap-y-2" >
                <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[90px]"></div>
                <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[50px] mt-2"></div>
                <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[50px] mt-2"></div>
              </div>
              <div className="flex flex-1 items-center justify-end gap-2" >
                <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[100px]"></div>
              </div>
            </div>
          ) : (
            <div className="mx-20 my-10">
              {cart.length === 0 ? (
                <div className="justify-center text-center space-y-4">
                  <div className="flex justify-center">
                    <BsBagXFill className="text-24 font-bold text-9xl" />
                  </div>
                  <h1 className="text-l uppercase font-bold font-nunito tracking-widest  text-gray-900 sm:text-3xl">
                    Your cart is empty.
                  </h1>
                  <p className="text-[12px] font-nunito tracking-widest">
                    Before proceed to checkout you must add some products to
                    your shopping cart.
                    <br />
                    You will find a lot of interesting products on our "Shop"
                    page.{" "}
                  </p>
                  <Link
                    href="/"
                    className="inline-block rounded bg-teal-500 px-5 py-3 text-medium tracking-widest text-gray-100 transition hover:bg-teal-600"
                  >
                    {" "}
                    Return To Shoping{" "}
                  </Link>
                </div>
              ) : (
                <div className="">
                  <ul className="space-y-4">
                    {cart?.map((item) => (
                      <li key={item?.id} className="flex items-center gap-4">
                        <Image
                          src={item?.product?.banner?.url}
                          width={100}
                          height={100}
                          alt={item?.product?.title}
                          className="size-16 rounded object-cover"
                        />

                        <div>
                          <h3 className="text-md text-gray-900 line-clamp-1">
                            {item?.product?.title}
                          </h3>

                          <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                            <div>
                              <dt className="inline">Catrgoey:</dt>
                              <dt className="inline">
                                {item?.product?.category}
                              </dt>
                              <dt className="inline">{item?.productId}</dt>
                            </div>
                          </dl>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-2">
                          <div className="font-bold text-[14px]">
                            ${item?.product?.price * item.quantity}
                          </div>
                          <UpdateQuantity
                            documentId={item.documentId}
                            currentQuantity={item.quantity}
                          />

                          <DeleteBtn
                            documentId={item?.documentId}
                            type="primary"
                          >
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
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                      <dl className="space-y-0.5 text-sm text-gray-700">
                        <div className="flex justify-between !text-base font-medium">
                          <dt>Total</dt>
                          <dd>${getTotalAmount().toFixed(2)}</dd>
                        </div>
                      </dl>

                      <div className="flex justify-end">
                        <button
                          onClick={() =>
                            router.push(`/checkout?amount=${getTotalAmount()}`)
                          }
                          className="block rounded bg-teal-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-teal-600"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
