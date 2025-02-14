"use client"
import { useEffect, useState } from "react";
import { CustomErrorType, whislistType } from "../types";
import Swal from "sweetalert2";
import NavbarClient from "../components/NabarCLient";

export default function Whislist() {
  const [wishlists, setWishLists] = useState<whislistType[]>([]);

  const handleDelete = async (wishlistId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wishlistId })
      });
      
      if (!response.ok) throw await response.json();
      setWishLists(prev => prev.filter(item => item._id !== wishlistId));
      Swal.fire({
        title: 'Success',
        text: 'Your product has been deleted from wishlist',
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: (error as CustomErrorType).message,
        icon: 'error',
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`);
        if (!response.ok) throw await response.json();
        const data = await response.json();
        setWishLists(data);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: (error as CustomErrorType).message,
          icon: 'error',
        });
      }
    };
    fetchData();
    
  }, []);



  return (
    <>
      < NavbarClient/>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Your Wishlists</h1>
              <p className="text-gray-600 mt-2">Manage your favorite products easily.</p>
            </div>

            <div className="mt-8">
              {wishlists.length === 0 ? (
                <p className="text-center text-lg text-gray-500">No items in your wishlist</p>
              ) : (
                <ul className="space-y-6">
                  {wishlists.map((wishlist) => (
                    <li key={wishlist._id} className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={`https://image.pollinations.ai/prompt/${wishlist.productDetails.name}?model=flux-pro&width=3840&height=2160&nologo=true`}
                        alt={wishlist.productDetails.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{wishlist.productDetails.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{wishlist.productDetails.excerpt}</p>
                        <p className="text-sm font-medium text-gray-700 mt-2">${wishlist.productDetails.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <form>
                          <label htmlFor="Line3Qty" className="sr-only">Quantity</label>
                          <input
                            type="number"
                            min="1"
                            value="1"
                            readOnly
                            id="Line3Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 focus:outline-none"
                          />
                        </form>

                        <button
                          className="text-gray-600 transition-colors hover:text-red-600"
                          onClick={() => handleDelete(wishlist._id)}
                        >
                          <span className="sr-only">Remove item</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
