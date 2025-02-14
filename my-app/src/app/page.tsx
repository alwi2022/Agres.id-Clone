import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { ProductType } from "./types";
export const dynamic = "force-dynamic"
import Link from "next/link";

export default async function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_URL 
  console.log(base,'ini base');
  
  const data = await fetch(`${base}/api/products`);
  console.log("NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);

  const products: ProductType[] = await data.json();
  return (
    <>
      <Navbar />
      <Banner />

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discover Our Latest Products
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore the latest and most powerful gaming and tech products,
            handpicked for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.slice(0, 3).map((el) => (
              <ProductCard key={el._id} product={el} />
            ))}
          </div>

          <div className="mt-8">
            <Link href="/products">
              <span className="text-lg font-medium  transition-colors">
                See All Products &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 shadow-xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg">
              <div className="mx-auto max-w-xl text-center">
              

                <div className="mt-4 md:mt-8">
                  <Link href="/products">
                    <span className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400 ">
                      Shop Now
                    </span>
                  </Link>
                </div>
              </div>
            </div> */}

        <div className="grid grid-cols-1  lg:grid-cols-2 ">
          <div className="h-96 flex justify-center items-center ">
            <img
              alt="Laptop Setup"
              src="https://www.agres.id/assets/images/cms/home/promo/6720ad7c2eaae_banner-2.jpg"
              className="  object-cover sm:h-74  rounded-xl shadow-lg"
              style={{width:'600px',border:'solid red 1px'}}
            />
          </div>
          <div className="h-96 flex justify-center items-center ">
            <img
              alt="Laptop Setup"
              src="https://www.agres.id/assets/images/cms/home/promo/6720ad23e8479_banner-1.jpg"
              className="object-cover sm:h-74   rounded-xl shadow-lg"
              style={{width:'600px',border:'solid red 1px'}}
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2"> */}

        {/* 
              <img
                alt="Gaming Accessories"
                src="https://www.agres.id/artikel/wp-content/uploads/2024/09/Lenovo-Yoga-Slim-7-14.jpg"
                className=" w-full object-cover sm:h-56  rounded-lg"
              />
              <img
                alt="Gaming Accessories"
                src="https://www.agres.id/artikel/wp-content/uploads/2024/08/ACER-PREDATOR-HELIOS-NEO-16.jpg"
                className=" w-full object-cover sm:h-56  rounded-lg"
              /> */}
        {/* </div> */}
        {/* </div>
        </div> */}
      </section>

      <Footer />
    </>
  );
}
