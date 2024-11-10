"use client"
import React, { useEffect } from "react"; 
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


function ConfirmedPayment() {
  useEffect(()=>{
    document.title = `Elessi Payment Confirmed  `
  },[])
  
  return (
    <section>
      <div className="my-20">
        <div className="m-auto px-3 py-8 w-full max-w-96 text-center border-gry-400 rounded shadow-2xl shadow-gry-500/50 space-y-6 ">
          <div className="flex  justify-center animate-scale-check"> 
            <IoMdCheckmarkCircleOutline className="text-teal-500 text-9xl " />
          </div>
          <h2 className="text-bold text-xl uppercase ">
            Hey, thanks for the order!
          </h2>
          <p className="text-[13px] ">
            We sent a confirmation to your email address. While we get your order ready,
             explore more products!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedPayment;
