"use client" 
import Hero from "./_component/Hero";
import ProductSection from "./_component/ProductSection";
import Head from "next/head";

export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>Elessi E-commerce Store</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <ProductSection />
    </div>
  );
}

