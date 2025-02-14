import Link from "next/link";
import { ProductType } from "../types";
import ButtonLove from "./ButtonLove";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="group relative block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
    <ButtonLove productId={product?._id}/>
      <Link href={`/products/${product.slug}`}>
        <img
          src={`https://image.pollinations.ai/prompt/${product.name}?model=flux-pro&width=3840&height=2160&nologo=true`}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <p className="text-xl font-bold text-gray-900">{`Rp $${product.price.toLocaleString()}`}</p>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex gap-4">
          <button className="w-full rounded-md bg-gray-100 py-3 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-all">
            Add to Cart
          </button>
          <button
            type="button"
            className="w-full rounded-md bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-700 transition-all"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
