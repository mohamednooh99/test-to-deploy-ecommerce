// "use client";
// import React, { useEffect } from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./_component/CheckoutForm";
// import { useSearchParams } from 'next/navigation';
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// function Checkout() {

//     const searchParams = useSearchParams()
//     const amount = Number(searchParams.get('amount')) * 100
//   const options = {
//     mode: "payment",
//     currency: "usd",
//     amount ,
//   };
//   useEffect(()=>{
//     document.title = `Elessi Checkout Products  `
//   },[])
//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm amount={ Number(searchParams.get('amount')) } />
//     </Elements>
//   );
// }

// export default Checkout;


"use client";

import React, { Suspense, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_component/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function CheckoutContent() {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) * 100;

  const options = {
    mode: "payment",
    currency: "usd",
    amount,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount / 100} />
    </Elements>
  );
}

function Checkout() {
  useEffect(() => {
    document.title = "Elessi Checkout Products";
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}

export default Checkout;
