"use client";

import React, { useEffect, useState } from "react";
import ProductApis from "../../_utils/ProductApis";
import ProductList from "../../_component/ProductList";
import SkeletonUi from "../../_component/ui/SkeletonUi";
import Head from "next/head";

function Category({ params }) {
  const [productListCategory, setProductListCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => {
    // document.title = `Elessi Categories ${params.category}`
    getCategory();
  }, [params?.category]);

  const getCategory = () => {
    ProductApis.getProductByCategory(params?.category)
      .then((res) => {
        setProductListCategory(res.data.data);
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
    setVisibleCount((prevCount) => prevCount + 8);
  };
  const productsRemaining = productListCategory.length - visibleCount;

  return (
    <>
      <Head>
        <title>Elssei {params.category}</title>
      </Head>

      <section className="mx-5">
        <div className="mx-auto my-24 ">
          <div className="mb-10 text-center space-y-10 py-8 bg-gray-100 ">
            <h2 className=" font-semibold text-xl font-nunito text-medium tracking-widest capitalize">
              {" "}
              {params.category}{" "}
            </h2>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <SkeletonUi key={index} />
                ))}
            </div>
          ) : (
            <>
              <ProductList
                productList={productListCategory.slice(0, visibleCount)}
              />
              {/* Load More Button */}
              {productsRemaining > 0 ? (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={loadMoreProducts}
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-800 
              transition-transform hover:-translate-y-1 motion-reduce:transform-none"
                  >
                    Load More
                  </button>
                </div>
              ) : (
                <div className="flex justify-center mt-8">
                  <p className="text-gray-500">All products loaded</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Category;
