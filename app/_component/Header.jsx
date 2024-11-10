"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { PiShoppingBag } from "react-icons/pi";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for mobile menu
  const { cart, setCart, openCart, setOpenCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();  

  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);

  

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    CartApis.getUserCartItem(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        res?.data?.data.forEach((icart) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              documentId: icart.documentId,
              id: icart.id,
              product: icart?.products[0],
              quantity: 1,
            },
          ]);
        });
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    !isLoggedIn && (
      <header className="bg-white mt-4">
        <div className="flex max-w-screen-xl items-center justify-between h-16 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Mobile Menu Toggle Button */}
          <button
            className="block rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className=" text-center md:text-left">
            <Image src="/logo_2.avif" alt="logo" width={80} height={50} />
          </Link>

          {/* Navigation Links - Single nav for both desktop and mobile */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white md:static md:flex md:w-auto md:bg-transparent z-50 shadow-lg md:shadow-none transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-6 p-4 md:p-0 font-nunito text-medium tracking-widest">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/categories/Men"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/categories/Women"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/categories/Kids"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/categories/Sports&Outdoors"
                >
                  Sports&Outdoors
                </Link>
              </li>
            </ul>
          </nav>

          {/* Cart and User Button */}
          {loading ? (
            <div className="flex items-center gap-4">
              <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[50px]"></div>
              <div className="bg-slate-200 animate-pulse rounded-full h-[40px] w-[40px]"></div>
            </div>
          ) : (
            <>
              {!user ? (
                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    <Link
                      className="rounded-md bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                      href="/sign-in"
                    >
                      Login
                    </Link>

                    <div className="hidden sm:flex">
                      <Link
                        className="rounded-md bg-teal-400 px-5 py-2.5 text-sm font-medium text-white"
                        href="/sign-up"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-5">
                  <div className="flex items-center gap-2">
                    {" "}
                    <div className="relative">
                      <PiShoppingBag
                        className="text-2xl text-bold text-gray-500 hover:text-teal-600 cursor-pointer"
                        onClick={() => setOpenCart(!openCart)}
                      />
                      <span className="bg-teal-600 text-[11px] text-white rounded-full absolute top-[-15px] right-[-10px] h-5 w-5 flex justify-center items-center">
                        {cart?.length}
                      </span>
                      {openCart && <Cart />}
                    </div>
                  </div>
                  <UserButton />
                </div>
              )}
            </>
          )}
        </div>
      </header>
    )
  );
}

export default Header;
