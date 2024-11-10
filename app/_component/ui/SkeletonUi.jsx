import React from "react";

function SkeletonUi() {
  return (
    <div className="space-y-5 ">
        <div className="bg-slate-200 animate-pulse rounded h-[300px] w-full "></div>
        <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[250px] md:w-[200px]  "></div>
        <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[70px] "></div> 
        <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[250px] md:w-[200px] "></div>
        <div className="bg-slate-200 animate-pulse rounded h-[20px] w-[100px] "></div>
    </div>
  );
}

export default SkeletonUi;
