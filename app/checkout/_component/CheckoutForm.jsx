import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { useContext, useState } from "react";
import { CartContext } from "../../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import OrderApis from "../../_utils/OrderApis";
import CartApis from "../../_utils/CartApis";

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Ensure Stripe.js has loaded
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    // call  Create Order function 
    createOrder();


    // Call Send Email function 
    sendEmail();

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Fetch the clientSecret from the backend
    const res = await fetch("/api/create-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount, // Specify the amount or other necessary data
      }),
    });

    const data = await res.json();
    const clientSecret = data; // Assuming the backend is returning only the client_secret

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm", // Your return URL
      },
      clientSecret, // Use the correct clientSecret value
    });

    if (result.error) {
      // Show error to your customer
      console.log(result.error.message);
    } else {
      // Payment succeeded, handle success
      console.log("Payment succeeded!");
    }
  };
  // Create Order
  const createOrder = () => {
    let productIds = [];
    cart.forEach((el) => {
      productIds.push(el?.product?.id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIds,
      },
    };

    OrderApis.createOrder(data).then((res) => {
      if (res) {
        cart.forEach((el) => {
          CartApis.deleteCartItem(el?.documentId).then((result) => {});
        });
      }
    });
  };

  // send email 
  const sendEmail = async ()=>{
    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
				amount: amount,
				email: user.primaryEmailAddress.emailAddress,
				fullName: user.fullName
			})
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] my-8">
        <PaymentElement />
        <button className="w-full p-2 mt-4 bg-teal-500 rounded-md text-white hover:bg-teal-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
