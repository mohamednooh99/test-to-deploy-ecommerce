import Image from "next/image";
import React from "react";

function ProductBanner({ product }) {  

    
  return (
    <div>
      {product?.banner?.url ? (
        <Image
          src={product?.banner?.url}
          alt="banner-image"
          width={400}
          height={380}
          className="rouunded-t-lg size-auto  object-cover"
        />
      ) : (
        <div className="h-[400px] w-[300px] md:h-[300px]  md:w-[250px] sm:h-[230px] sm:w-[200px] bg-slate-200 animate-pulse"  >  </div>
      )}
    </div>
  );
}

export default ProductBanner;
