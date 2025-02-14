import WishList from "@/app/components/ActionButtonWhislist";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { ProductType } from "@/app/types";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = (await params).slug;

  const product: ProductType = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`
  ).then((res) => res.json());

  return {
    title: product.name ,
    description: product.description,
    openGraph: {
      images: [
        `https://image.pollinations.ai/prompt/${product.images}-thumbnail?model=flux-pro&width=800&height=800&nologo=true`,
      ],
    },
  };
}

export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`);
  const product: ProductType = await data.json();

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={`https://image.pollinations.ai/prompt/${product.thumbnail}-thumbnail?model=flux-pro&width=800&height=800&nologo=true`}
              alt={product.name}
              className="object-cover w-96 h-96 rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-semibold text-gray-800">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600">{product.excerpt}</p>

            <p className="text-lg text-gray-700">{product.description}</p>

            <p className="text-xl font-semibold text-gray-800">{`Rp $${product.price.toLocaleString()}`}</p>

            <hr className="my-6 border-gray-200" />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Spesifikasi
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
              {product.tags?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            </div>

            <hr className="my-6 border-gray-200" />
            <div className="flex space-x-4">
              {/* <Link
              href={"/whislist"}
              className="w-68 py-2 px-6 rounded-lg text-black border-2 border-red-600 hover:bg-red-100 transition-all duration-300"
              >
              Add to Wishlist
              <span className="sr-only">Wishlist</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
              </svg>
            </Link> */}
              <WishList productId={product._id} />

              <button
                className="w-68 py-2 px-6 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all duration-300"
                style={{ backgroundColor: "#EC1C24" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
