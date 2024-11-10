"use client";

import React, { useEffect, useState } from "react";
import ProductApis from "../_utils/ProductApis";
import ProductList from "./ProductList";
import FeaturedCategory from "./FeaturedCategory";
import SkeletonUi from "./ui/SkeletonUi";
import Image from "next/image";

function ProductSection() {
  
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12)
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts()
      .then((res) => {
        setProductList(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

    // Load more products by increasing the visibleCount
  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };
// Calculate how many products are left to load
  const productsRemaining = productList.length - visibleCount; 

  return (
    <div className="px-10 md:px-10 my-8 ">
      <div className="flex justify-center text-center mx-auto">
        <FeaturedCategory productList={productList} />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-semibold font-3xl my-10 font-nunito text-medium tracking-widest"> Our Latest Products </h2>
      </div>
      {loading ? (
        // Render SkeletonUi multiple times to simulate loading
        <div className="grid grid-cols-1 lg:grid-col-4 md:grid-cols-3 xsm:grid-cols-2 gap-4">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <SkeletonUi key={index} /> // Use SkeletonUi for each placeholder
            ))}
        </div> 
      ) : (
        <>
          <ProductList productList={productList.slice(0, visibleCount)} />
          {/* Load More Button */}
          {productsRemaining > 0 ? (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMoreProducts}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
              >
                Load More 
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-10">
              <p className="text-gray-500">All products loaded</p>
            </div>
          )}
        </>
      )}
      <section className="relative flex h-[350px] flex-col justify-center items-center mt-5">
        <div className="absolute w-full h-full">
        <Image
          className="w-full h-full object-cover object-center"
          fill
          alt="image"
          src={"/img_2.webp"}
        />
        </div>
      </section>
    </div>
  );
}

export default ProductSection;
