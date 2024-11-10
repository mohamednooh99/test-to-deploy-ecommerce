import React, { useContext } from "react";
import CartApis from "../../_utils/CartApis";
import { CartContext } from "../../_context/CartContext";

export default function DeleteBtn({children, documentId ,type}) {
  const { cart, setCart } = useContext(CartContext);
const styles = {
    primary:'text-gray-600 transition hover:text-red-600 text-[15px]',
    secondry:' bg-red-400 transition hover:bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded cursor-pointer'
}

  const deleteItemFromCart = (documentId) => { 
    console.log(documentId);
    
    CartApis.deleteCartItem(documentId)
      .then((res) => {
        if (res.status === 204) {
          setCart((oldCart) => {
            const updatedCart = oldCart.filter(
              (item) => item.documentId !== documentId
            );
            console.log("Updated cart after deletion:", updatedCart);
            return updatedCart;
          });
        } else {
          console.error("Failed to delete item from Strapi", res);
        }
      })
      .catch((error) => {
        console.error("Error deleting item from cart:", error);
      });
  };
  return (
    <button
      className={styles[type]}
      onClick={() => {
        deleteItemFromCart(documentId);
      }}
    >
        {children}
    </button>
  );
}

 
