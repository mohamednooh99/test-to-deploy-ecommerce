import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeaturedCategory({ productList }) {
  const categories = ["Men", "Women", "Kids", "Sports&Outdoors"];


  const category = categories.map((item, index) => (
    <div key={index}>
      <Link
        href={`/categories/${item}`} 
      >
        <Image
          src={`/features_${index + 1}.webp`}
          width={300}
          height={300}
          alt="Featured Categories"
          className="rounded-t-lg h-[330px] object-cover rounded border"
        />
        <p className="font-bold mt-2">{item} </p>
      </Link>
    </div>
  ));
  return (
    <div className="mb-5">
      <h1 className="font-bold text-xl uppercase my-10 font-nunito text-medium tracking-widest capitalize">
        {" "}
        Featured Categories{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 xsm:grid-cols-2 gap-4 font-nunito text-medium tracking-widest"> 
          {category} 
      </div>
    </div>
  );
}

export default FeaturedCategory;
