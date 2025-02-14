"use client";

import Swal from "sweetalert2";
import { CustomErrorType } from "../types";

export default function ButtonLove({
  productId,
}: {
  productId: string | undefined;
}) {
  console.log(productId, "ini productid di whislistActionButton");

  const addWishList = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: productId,
          }),
        }
      );
  
      const result = await response.json();
  
      if (!response.ok) throw result;
  
      if (result.alreadyExists) {
        Swal.fire({
          title: "Info",
          text: "This product is already in your wishlist.",
          icon: "info",
        });
      } else {
        Swal.fire({
          title: "Success",
          text: "Successfully added product to wishlist.",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: (error as CustomErrorType).message,
        icon: "error",
      });
    }
  };
  

  return (
    <button
      onClick={async () => {
        await addWishList();
      }}
      className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
    >
      <span className="sr-only">Wishlist</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}
