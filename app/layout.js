"use client";

import Roboto from "next/font/local";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_context/CartContext";
import {  useState } from "react";
import { Nunito_Sans } from "next/font/google";  


const geistSans = Roboto({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = Roboto({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["300", "400", "600", "700"], // Add the specific weights you want to use
}); 

export default function RootLayout({ children }) {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState( [])


  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart,openCart, setOpenCart }}>
        <html lang="en"> 
          {/* <CustomHead /> */}
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} antialiased grid h-screen grid-rows-[auto_1fr_auto]`}
          >
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
