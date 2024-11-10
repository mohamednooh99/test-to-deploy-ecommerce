"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
    }, 7000);
    return () => clearInterval(int);
  }, []);
  const handlePrev = () => {
    setPage((prev) => (prev - 1 <= 0 ? 4 : prev - 1));
  };
  const handleNext = () => {
    setPage((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
  };
  return (
    // slider
    <div className="relative flex h-[500px] flex-col justify-center items-center">
      <div className="absolute h-full w-full">
        <Image
          className="w-full h-full object-cover object-center"
          fill
          alt="image"
          src={`/image_${page}.webp`}
        />
        <div className="z-10 absolute bottom-1/2 left-20 ">
          <h2 className="text-3xl font-bold sm:text-4xl"> Your Favourite <br/> Brand </h2>
        </div>
      </div>
      <div
        onClick={handlePrev}
        className="z-10 absolute bottom-1/2 left-4 text-2xl  "
      >
        <span
          className="inline-block transition-transform hover:translate-x-1
        motion-reduce:transform-none cursor-pointer text-teal-600 text-semibold hover:text-
        "
        >
          &larr;
        </span>
      </div>
      <div
        onClick={handleNext}
        className="z-10 absolute bottom-1/2 right-4 text-2xl"
      >
        <span
          className="inline-block transition-transform hover:-translate-x-1
        motion-reduce:transform-none cursor-pointer text-teal-600 text-semibold hover:text-
        "
        >
          &rarr;
        </span>
      </div>
    </div>
  );
}

export default Hero;
