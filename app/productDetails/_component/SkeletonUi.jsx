import React from "react";

function SkeletonUi() {
  return (
    <div className="space-y-5">
        <div className="bg-slate-200 animate-pulse h-[20px] w-full sm:w-[70%] md:w-[300px] lg:w-[400px]"></div>
        <div className="bg-slate-200 animate-pulse h-[20px] w-[300px] sm:w-[70%] md:w-[300px] lg:w-[400px] "></div>
        <div className="bg-slate-200 animate-pulse h-[20px] w-[70px]  sm:w-[30%] md:w-[50px] lg:w-[70px] "></div>
        <div className="bg-slate-200 animate-pulse h-[20px] w-full sm:w-[70%] md:w-[300px] lg:w-[400px] "></div>
        <div className="bg-slate-200 animate-pulse h-[20px] w-full sm:w-[70%] md:w-[300px] lg:w-[400px] "></div>
        <div className="bg-slate-200 animate-pulse h-[20px] w-full sm:w-[70%] md:w-[300px] lg:w-[400px] "></div>
        <div className="bg-slate-200 animate-pulse h-[20px] w-[100px]  sm:w-[30%] md:w-[70px] lg:w-[100px] "></div>
    </div>
  );
}

export default SkeletonUi;
