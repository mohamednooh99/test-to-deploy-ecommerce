"use client";
import { IoPricetags } from "react-icons/io5";
import { LuListMinus } from "react-icons/lu";
import { BiSolidShoppingBag } from "react-icons/bi";
import SkeletonUi from "./SkeletonUi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../_utils/CartApis";
import { useContext } from "react";
import { CartContext } from "../../_context/CartContext";
import DeleteBtn from "../../_component/ui/DeleteBtn"; 
import UpdateQuantity from "../../_component/ui/UpdateQuantity";

function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  // Check if item is already in the cart
  const isItemInCart = cart.some(
    (item) => item?.product?.documentId === product?.documentId
  );
  const filterItem = cart.filter(
    (i) => i?.product?.documentId === product?.documentId
  );  


  // will complate late
  //   const existingItemIndex  = cart.findIndex( (i) => i?.product?.documentId === product?.documentId );
  //   if (existingItemIndex >= 0) {
  //     // Item exists, update quantity
  //     console.log(  cart[existingItemIndex].quantity += quantity );
  // }

  const handelAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName || "Anonymous",
          email:
            user.primaryEmailAddress?.emailAddress || "no-email@example.com",
          products: [product?.id],
        },
      };
      CartApis.addToCart(data)
        .then((res) => {
          const documentId = res?.data?.data?.documentId;
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              documentId: documentId,
              product,
              quantity: 1,
            },
          ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
 


  return (
    <>
      {product?.id ? (
        <article className="product-info ">
          <section className="sm:space-y-4 md:space-y-8 space-y-8 ">
            <header className=" space-y-10 ">
              <h1 className="font-semibold font-sans text-lg line-clamp-1">
                {product?.title}
              </h1>
              <h2 className="font-medium text-xs flex gap-1 ">
                <LuListMinus /> {product?.category}
              </h2>
            </header>
            <p>
              {product?.description?.[0]?.children?.[0]?.text ||
                "No description available."}
            </p>
            <div className="text-xs">
              {product?.instantDelivery}
              Eligible For Instant Delivery
            </div>
            <footer className="flex items-center justify-between">
              <p className="flex gap-1 font-semibold text-teal-600">
                {product?.price} <IoPricetags />
              </p>
            </footer>
            {isItemInCart && (
              <div className="flex items-center max-sm:gap-1 sm:gap-8">
                {/* // ubdate quantity   */}
                {filterItem.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center mr-3">
                      <UpdateQuantity documentId={item.documentId} currentQuantity={item.quantity}/>
                    </div>
                    <DeleteBtn documentId={item.documentId} type="secondry">
                      Remove
                    </DeleteBtn>
                    
                  </div>
                ))}
              </div>
            )}
            {!isItemInCart && (
              <button
                onClick={() => handelAddToCart()}
                className="flex gap-3 bg-teal-500 hover:bg-teal-600 text-white items-center font-semibold py-2 px-4 rounded 
               cursor-pointer"
                aria-label="Add this product to the cart"
              >
                {" "}
                Add To Cart <BiSolidShoppingBag />{" "}
              </button>
            )}
          </section>
        </article>
      ) : (
        <SkeletonUi />
      )}
    </>
  );
}

export default ProductInfo;
