"use client" 
import Hero from "./_component/Hero";
import ProductSection from "./_component/ProductSection";
import Head from "next/head";

export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>Elessi E-commerce Store</title>
      </Head>
      <Hero />
      <ProductSection />
    </div>
  );
}

