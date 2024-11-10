import React, { useContext } from 'react';  
import ButtonUi from './ButtonUi';  
import { CartContext } from '../../_context/CartContext'; 


export default function UpdateItemQuantity({ documentId, currentQuantity }) { 
    const {  setCart } = useContext(CartContext);

    const incrementQuantity = (documentId)=>{
        console.log(documentId);
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.documentId === documentId
              ? { ...item, quantity: item.quantity + 1  }
               // update quantity for matching item
              : item
               // keep other items unchanged
          )
        ) 
        
      }
      const decrementQuantity = (documentId) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
              item.documentId === documentId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )  // Remove item if quantity is 0
        );
      };

  return (
    <div className="flex items-center gap-1">
      <ButtonUi 
        type="secondry"
        onClick={() =>  decrementQuantity(documentId) }
      > - </ButtonUi>
      <span className="text-sm font-medium"> {currentQuantity}  </span>
      <ButtonUi 
        type="secondry"
        onClick={() =>  incrementQuantity(documentId) }
      > + </ButtonUi>
    </div>
  );
}